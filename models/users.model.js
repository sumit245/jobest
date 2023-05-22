const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Users = new Schema({
    user_id: String,
    first_name: String,
    last_name: String,
    profile_picture: String,
    phone: String,
    email_id: String,
    password: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    country: String,
    postal_code: String,
    documents: [String],
    geo: {
        latitude: String,
        longitude: String
    },
    resume: {
        type: String,
        default: null
    },
    cards: [
        {
            card_holder: String,
            card_number: String,
            expiry: String,
            brand: String,
            cvc: String,
        },
    ],
    status: {
        type: String,
        default: "Active",
    },
    wallet_balance: { type: String, default: 0 },
    company: {
        name: String,
        join: String,
        till: String
    },

}, { timestamps: true });

module.exports = mongoose.model("Users", Users);
