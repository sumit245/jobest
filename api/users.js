const express = require("express");
const router = express.Router();
const Users = require("../models/users.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("../utils/passport");
const authMiddleware = require("../utils/authMidleware");
const Jobs = require("../models/jobs.model");
const { upload } = require('../utils/upload');
const secretKey = require('../utils/secret');

//1. Get all users
router.route("/").get(async (req, res) => {
    const users = await Users.find({})
    res.json(users)
});

//2. Create a new user
router.post("/", async (req, res) => {
    const { phone } = req.body;
    const user = await Users.findOne({ phone }).exec();
    if (user) {
        return res.json({ status: 201, data: user, msg: "User Already Exists" });
    }
    const count = await Users.countDocuments();
    const userId = `USER${(count + 1).toString().padStart(4, "0")}`;
    const newUser = new Users({ user_id: userId, ...req.body });
    const response = await newUser.save();
    res.json({
        status: 200,
        data: response,
        msg: "User created successfully"
    });
})

//3. User Login with email and password
router.route('/auth/signin-email-password').post(async (req, res) => {
    const { email_id, password } = req.body;
    const user = await Users.findOne({ email_id });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    await bcrypt.compare(password, user.password, (error, passwordMatch) => {
        if (error) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        if (passwordMatch) {
            const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
            res.json({ token, user });
        } else {
            res.json({ token: null, message: 'Wrong password! Please Try again' });
        }
    });
});

//4. User signup using email and password
router.route('/auth/signup-email-password').post(async (req, res) => {
    const { email_id, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await Users.findOne({ email_id });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        //Increase the count of employers
        const count = await Users.countDocuments();
        const userId = `USER${(count + 1).toString().padStart(4, "0")}`;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password
        const newUser = new Users({
            user_id: userId,
            email_id,
            password: hashedPassword
        });

        // Save the user to the database
        await newUser.save();

        res.json({
            status: 200,
            data: newUser,
            msg: "Employer created successfully"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//5. Get specific user
router.route("/:id").get(async (req, res) => {
    let { id } = req.params;
    try {
        const user = await Users.findById(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//6. Update a user
router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            status: 201,
            data: updatedUser,
            msg: "Account Updated Successfully",
        });
    } catch (error) {
        res.json({ status: 403, msg: "Bad Request" });
    }
});

//7. Delete single user by id
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedUser = await Users.findByIdAndDelete(id);
    res.json(deletedUser);
});

//8. Delete all users
router.delete("/", async (req, res) => {
    await Users.deleteMany({});
    res.json({ msg: "All Deleted" });
});

//9. Google login route
router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

//10. Google login callback route
router.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Redirect or respond with success message
        res.redirect('/profile');
    }
);

//11. User logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

//12. User profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json(req.user);
});

//13. Api endpoint to upload a resume
router.post('/upload/:id', upload.single('resume'), async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.resume = req.file.path;
        await user.save();
        res.json({ msg: 'Resume Uploaded' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//14. API endpoint to upload multiple documents
router.post('/upload-multiple/:id', upload.array('documents', 5), async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Retrieve the uploaded documents
        const files = req.files;

        // Store the file paths or URLs in the user document
        files.forEach(file => {
            user.documents.push(file.path); // Assuming the file path is stored in the 'path' property of each file object
        });
        // Save the updated user document
        await user.save();
        res.json({ message: 'Documents uploaded successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//15. Apply for a job
router.post('/apply/:jobId', authMiddleware, async (req, res) => {
    const jobId = req.params.jobId;
    const userId = req.user.user_id; // Assuming you have middleware to authenticate and set req.user

    try {
        // Check if the job exists
        const job = await Jobs.findById(req.params.jobId);
        console.log("I");
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        // Check if the user exists
        const user = await Users.findOne({ user_id: userId });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the user has already applied for the job
        // const alreadyApplied = job && job.applicants && job.applicants.some(
        //     (applicant) => applicant.user_id.toString() === userId
        // );

        // if (alreadyApplied) {
        //     return res.status(400).json({ message: 'You have already applied for this job' });
        // }

        // Create an applicant object with user details
        const applicant = {
            user_id: userId,
            name: user.name,
            email: user.email,
            resume: user.resume, // Assuming the user model has a resume field
        };
        job.applicants.push(applicant);
        await job.save();
        res.json({ message: 'Application submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//16. Get all jobs
router.get('/jobs', authMiddleware, async (req, res) => {
    const jobs = await Jobs.find({});
    res.json(jobs);
});


module.exports = router;
