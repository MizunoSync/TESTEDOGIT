// Import the built-in http module
const http = require('http');

// Define the port
const PORT = process.env.PORT || 3000;

// Create the server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Cosmic API! 🌌\n'); // Respond with a welcome message
});

// Start the server
server.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
