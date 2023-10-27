/**
 * Generates an HTML form template with input fields and a submit button.
 *
 * @returns {string} The HTML form template as a string.
 */
const formTemplate = () =>
	`
        <form action="/message" method="POST">
            <input type="text" name="message" />
            <input type="submit" />
        </form>
    `.trim();

module.exports = formTemplate;
