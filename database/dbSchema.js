import { Schema, model } from 'mongoose';

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
    contactNumber: Number,
    email: String
});

// create booking model using schema
export const Booking = model('Booking', bookingSchema);

// create user model using schema
export const User = model('User', userSchema);

