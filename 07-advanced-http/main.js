// Import the 'http' module to create an HTTP server.
const http = require("http");

// Import the 'requestListener' function from a separate module.
const requestListener = require("./requestListener");

// Create an HTTP server using the 'requestListener' to handle incoming requests.
const server = http.createServer(requestListener);

// Make the server listen on port 3000 for incoming HTTP requests.
server.listen(3000);
