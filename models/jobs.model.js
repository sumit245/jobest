const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Jobs = new Schema({
    job_id: String,
    title: String,
    description: String,
    emp_id: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["open", "closed", "in progress"],
        default: "open",
        required: true,
    },
    vacancy: Number,
    salary: Number, //* TODO: Add salary range
    location: String,
    company_name: String,
    skills: [String],
    applicants: [
        {
            user_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            name: String,
            email_id: String,
            resume: String,
        },
    ],
}, { timestamps: true });

module.exports = mongoose.model("Jobs", Jobs);
