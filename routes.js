const express = require('express');
const { Booking, User } = require('./database/dbSchema');
// Create an instance of the Express router:
const router = express.Router();

// Get request route to fetch all bookings
router.get('/api/bookings', async (req, res) => {
    // const { } = req.body;

    // try {
        
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).send('Error retrieving all bookings data');
    // }
});

// Get request route to fetch specific booking
router.get('/api/bookings/:id', async (req, res) => {
    // const { id } = req.params;
  
    // try {
     
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).send('Error retrieving booking data');
    // }
});

// Post request route to save booking
router.post('/api/bookings', async (req, res) => {
    // const { } = req.body;

    // try {
        
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).send('Error saving booking data');
    // }
});

// Delete request route to delete specific booking
router.delete('/api/bookings/:id', async (req, res) => {
    // const { id } = req.params;
  
    // try {
     
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).send('Error retrieving booking data');
    // }
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
    const { firstName, middleName, lastName, contactNumber, email } = req.body;

    // Create a new instance of the User model with the provided data
    try {
        const newUser = new User({
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            contactNumber: contactNumber,
            email: email
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