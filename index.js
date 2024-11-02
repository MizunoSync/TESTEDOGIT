// Importing the required modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Set the port, default to 3000

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for the root
app.get('/', (req, res) => {
    res.send('Welcome to the Cosmic API! 🌌'); // Respond with a welcome message
});

// Example API endpoint
app.get('/api/data', (req, res) => {
    const data = {
        message: 'Here is some cosmic data for you!',
        stars: 100,
        galaxies: 50
    };
    res.json(data); // Respond with JSON data
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
