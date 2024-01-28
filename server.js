const express = require('express');
const cors = require('cors');
const router = require('./routes');
const { connectToDatabase } = require('./database/conn')

// express app
const app = express();

// get port from .env file
require("dotenv").config();
const port = process.env.PORT || 4000;

// middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use(router);

// listen to requests
app.listen(port, () => {
    // Perform a database connection when server starts
    connectToDatabase();

    console.log(`Server is running on port: ${port}`);
});