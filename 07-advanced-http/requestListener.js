// Import the 'fs' (file system) module for file-related operations.
const fs = require("fs");

// Import HTML and form templates from respective modules.
const htmlTemplate = require("./htmlTemplate");
const formTemplate = require("./formTemplate");

/**
 * Request listener function to handle HTTP requests.
 *
 * @param {http.IncomingMessage} req - The HTTP request object.
 * @param {http.ServerResponse} res - The HTTP response object.
 */
const requestListener = (req, res) => {
	// Extract URL and HTTP method from the request object.
	const { url, method } = req;

	if (url === "/") {
		// Set the response header and write HTML content using templates.
		res.setHeader("Content-Type", "text/html");
		res.write(htmlTemplate(formTemplate()));
	} else if (url === "/hello") {
		// Set the response header and write a specific HTML content.
		res.setHeader("Content-Type", "text/html");
		res.write(htmlTemplate(`<h1>Hello</h1>`));
	} else if (url === "/message" && method === "POST") {
		// Initialize an empty array 'body' to store request data chunks.
		const body = [];

		// Listen for 'data' events to collect request data chunks.
		req.on("data", (chunk) => body.push(chunk));

		// Listen for the 'end' event when all request data has been received.
		req.on("end", () => {
			// Concatenate the received data chunks into a single buffer and convert it to a string.
			const parsedBody = Buffer.concat(body).toString();

			// Extract the message part from the request data (assuming it's URL-encoded).
			const message = parsedBody.split("=")[1];

			// Save the extracted message to a file.
			fs.writeFileSync("./message.txt", message);
		});

		// Redirect to the home page after processing the POST request.
		res.writeHead(302, { Location: "/" });
	} else {
		// Handle other URL paths by setting response header and displaying a "Not Found" message.
		res.setHeader("Content-Type", "text/html");
		res.write(htmlTemplate(`<h1>Not Found</h1>`));
	}

	// End the response to the client.
	return res.end();
};

module.exports = requestListener;
