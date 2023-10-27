/**
 * Generates an HTML template with the provided body content.
 *
 * @param {string} bodyContent - The content to be placed inside the HTML body.
 * @returns {string} The HTML template as a string.
 */
const htmlTemplate = (bodyContent) =>
	`
        <html>
            <head>
                <title>
                    Hello World!
                </title>
            </head>

            <body>
                <center>${bodyContent}</center>
            </body>
        </html>
    `.trim();

module.exports = htmlTemplate;
