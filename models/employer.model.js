const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Employer = new Schema({
    emp_id: String,
    first_name: String,
    last_name: String,
    company_name: String,
    registration_date: String,
    registration_number: String,
    tin_number: String,
    gst_number: String,
    company_logo: String,
    company_linked_in_profile: String,
    company_linked_in_url: String,
    phone: String,
    email_id: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    country: String,
    postal_code: String,
    geo: {
        latitude: String,
        longitude: String
    },
    wallet_balance: { type: String, default: 0 },
    website: String,
    documents: [String]
}, { timestamps: true });

module.exports = mongoose.model("Employer", Employer);
