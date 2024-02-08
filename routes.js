const express = require('express');
const { Booking, User } = require('./database/dbSchema');
const { default: mongoose } = require('mongoose');
// Create an instance of the Express router:
const router = express.Router();

// Get request route to fetch all bookings
router.get('/api/bookings', async (req, res) => {
    try {
        // find all bookings document in the database
        const bookings = await Bookings.find();

        // Send the response as JSON
        res.json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving all bookings data');
    }
});

// Get request route to fetch specific booking
router.get('/api/bookings/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
        // Find booking using id in database
        const booking = await User.find({ _id: mongoose.ObjectId(id)});

        // Send the response as JSON
        res.json(booking);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving booking data');
    }
});

// Post request route to save booking
router.post('/api/bookings', async (req, res) => {
    const { appointmentDate, courseTaken, dateCreated, isPaid, datePaid } = req.body;

    // Create a new instance of the Booking model with the provided data
    try {
        const newBooking = new Booking({
            appointmentDate: appointmentDate,
            courseTaken: courseTaken,
            dateCreated: dateCreated,
            isPaid: isPaid,
            datePaid: datePaid
        })

        // Save the booking data to the database
        const savedBooking = await newBooking.save();

        // Create a response object with the saved user data
        const responseData = {
            appointmentDate: savedBooking.appointmentDate,
            courseTaken: savedBooking.courseTaken,
            dateCreated: savedBooking.dateCreated,
            isPaid: savedBooking.isPaid,
            datePaid: savedBooking.datePaid,
            message: 'Booking data saved successfully',
        };

        // Send the response as JSON
        res.json(responseData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving user data');
    }
});

// Put request route to update datePaid and isPaid of a specific booking
router.put('/api/bookings/:id', async (req, res) => {
    const { id } = req.params;
    const { datePaid, isPaid } = req.body;

    try {
        // find booking using id then update datePaid and isPaid in the database
        const updatedBooking = await Booking.findOneAndUpdate(mongoose.ObjectId(id), { datePaid: datePaid, isPaid: isPaid }, {
            new: true
        });

        // Send the response as JSON
        res.json(updatedBooking);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving booking data');
    }
});

// Delete request route to delete specific booking
router.delete('/api/bookings/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        // find booking using id then delete in the database
        const deletedBooking = Booking.deleteOne( { _id: mongoose.ObjectId(id) });
    
        // Send the response as JSON
        res.json(deletedBooking);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving booking data');
    }
});

// Get request route to fetch user
router.get('/api/user/:email', async (req, res) => {
    const { email } = req.params;
  
    try {
        // Find user using email in database
        const theUser = await User.find({ email: email});

        // Send the response as JSON
        res.json(theUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving user data');
    }
});

// Post request route to save user
router.post('/api/user', async (req, res) => {
    const { firstName, middleName, lastName, contactNumber, email, password } = req.body;

    // Create a new instance of the User model with the provided data
    try {
        const newUser = new User({
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            contactNumber: contactNumber,
            email: email,
            password: password
        })

        // Save the user data to the database
        const savedUser = await newUser.save();

        // Create a response object with the saved user data
        const responseData = {
            firstName: savedUser.firstName,
            lastName: savedUser.lastName,
            middleName: savedUser.middleName,
            contactNumber: savedUser.contactNumber,
            message: 'User data saved successfully',
        };

        // Send the response as JSON
        res.json(responseData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving user data');
    }
});

module.exports = router;