// Importing the http module
const http = require('http');

// Creating a simple server
const server = http.createServer((req, res) => {
    // Handling incoming requests
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, this is a simple Node.js server!\n');
});

// Setting the port for the server to listen on
const port = 5000;

// Making the server listen on the specified port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
