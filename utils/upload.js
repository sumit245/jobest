const multer = require('multer');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Set the destination folder for uploaded resumes
    },
    filename: function (req, file, cb) {
        const extname = path.extname(file.originalname);
        const filename = `${file.fieldname}-${Date.now()}${extname}`;
        cb(null, filename); // Set the filename of the uploaded resume
    },
});

// Create a multer upload instance
const upload = multer({ storage: storage });

module.exports = { upload };
