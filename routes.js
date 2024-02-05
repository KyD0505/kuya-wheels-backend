const express = require('express');

// Create an instance of the Express router:
const router = express.Router();

// Get request route to fetch all bookings
router.get('/api/bookings', async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving all bookings data');
    }
});

// Get request route to fetch specific booking
router.get('/api/bookings/:booking', async (req, res) => {
    // const { booking } = req.params;
  
    // try {
     
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).send('Error retrieving booking data');
    // }
});

module.exports = router;