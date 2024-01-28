const mongoose = require('mongoose');
const dotenv  = require('dotenv');

// get mongodb uri from .env file
require("dotenv").config();
const mongoURI = process.env.DB_URI;

async function connectToDatabase() {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to Database Successfully!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connectToDatabase };