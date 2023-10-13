// Import the HTTP module
const http = require("http");

/**
 * Request listener function that handles incoming HTTP requests.
 *
 * @param {http.IncomingMessage} req - The HTTP request object.
 * @param {http.ServerResponse} res - The HTTP response object.
 */
const requestListener = (req, res) => {
	// Log the incoming HTTP request object
	console.log(req);
};

// Create an HTTP server
const server = http.createServer(requestListener);

// Start the server and listen on port 3000
server.listen(3000);
