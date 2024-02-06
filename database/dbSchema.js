const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// define a schema for the booking model
const bookingSchema = new Schema({
    appointmentDate: Date,
    courseTaken: String,
    dateCreated: Date,
    isPaid: Boolean,
    datePaid: Date
});

// define a schema for the user model
const userSchema = new Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    contactNumber: String,
    email: String
});

// create booking model using schema
const Booking = model('Booking', bookingSchema);

// create user model using schema
const User = model('User', userSchema);

// Export the User and Booking model to be used in other parts of the application
module.exports = {
    Booking,
    User,
};