const express = require("express");
const router = express.Router();
const Employers = require("../models/employer.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("../utils/passport");
const secretKey = require('../utils/secret');

//1. Get all employers
router.route("/").get(async (req, res) => {
    const employers = await Employers.find({})
    res.json(employers)
});

//2. Create a new employer
router.route("/").post(async (req, res) => {
    const { phone } = req.body;
    const employer = await Employers.findOne({ phone }).exec();
    if (employer) {
        return res.json({ status: 201, data: employer, msg: "Employer Already Exists" });
    }
    const count = await Employers.countDocuments();
    const empId = `EMP${(count + 1).toString().padStart(4, "0")}`;
    const newEmployer = new Employers({ emp_id: empId, ...req.body });
    const response = await newEmployer.save();
    res.json({
        status: 200,
        data: response,
        msg: "Employer created successfully"
    });
})

//3. User Login with email and password
router.route('/auth/signin-email-password').post(async (req, res) => {
    const { email_id, password } = req.body;
    const employer = await Employers.findOne({ email_id });
    if (!employer) {
        return res.status(404).json({ message: 'Employer not found' });
    }
    await bcrypt.compare(password, employer.password, (error, passwordMatch) => {
        if (error) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        if (passwordMatch) {
            const token = jwt.sign({ userId: employer._id }, secretKey, { expiresIn: '1h' });
            res.json({ token, employer });
        } else {
            res.json({ token: null, message: 'Wrong password! Please Try again' });
        }
    });
});

//4. User Signup using email and password
router.route('/auth/signup-email-password').post(async (req, res) => {
    const { email_id, password } = req.body;

    try {
        // Check if the employer already exists
        const existingUser = await Employers.findOne({ email_id });
        if (existingUser) {
            return res.status(409).json({ message: 'Employer already exists' });
        }
        //Increase the count of employers
        const count = await Employers.countDocuments();
        const empId = `EMP${(count + 1).toString().padStart(4, "0")}`;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new employer with the hashed password
        const newUser = new Employers({
            emp_id: empId,
            email_id,
            password: hashedPassword
        });

        // Save the employer to the database
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

//5. Get specific employer
router.route("/:id").get(async (req, res) => {
    let { id } = req.params;
    try {
        const employer = await Employers.findById(id);
        res.json(employer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//6. Update a employer
router.route("/:id").put(async (req, res) => {
    try {
        const updatedUser = await Employers.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            status: 201,
            data: updatedUser,
            msg: "Account Updated Successfully",
        });
    } catch (error) {
        res.json({ status: 403, msg: "Bad Request" });
    }
});

//7. Delete single employer by id
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedUser = await Employers.findByIdAndDelete(id);
    res.json(deletedUser);
});

//8. Delete all employers
router.delete("/", async (req, res) => {
    await Employers.deleteMany({});
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


module.exports = router;
