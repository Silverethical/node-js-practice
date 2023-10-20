// Import the 'fs' (file system) module for file-related operations.
const fs = require("fs");

// Import the 'chalk' library for colored output in the console.
const chalk = require("chalk");

/**
 * Load contacts from a JSON file.
 *
 * @returns {Array} An array of contact objects.
 */
const loadContacts = () => {
	try {
		// Read the contents of the "contacts.json" file into a data buffer.
		const dataBuffer = fs.readFileSync("contacts.json");

		// Parse the data buffer and convert it into a JavaScript object (array of contacts).
		const contacts = JSON.parse(dataBuffer.toString());

		// Return the array of contact objects.
		return contacts;
	} catch (err) {
		// Handle errors by logging the error and returning an empty array.
		console.error(err);
		return [];
	}
};

/**
 * Save an array of contact objects to a JSON file.
 *
 * @param {Array} contacts - An array of contact objects to be saved.
 */
const saveContacts = (contacts) => {
	// Write the JSON-serialized 'contacts' array to a file named "contacts.json".
	fs.writeFileSync("contacts.json", JSON.stringify(contacts));
};

/**
 * Add a new contact to the contacts list.
 *
 * @param {Object} contactData - Data for the new contact.
 * @param {string} contactData.firstName - First name of the contact.
 * @param {string} contactData.lastName - Last name of the contact.
 * @param {string} contactData.fullName - Full name of the contact.
 * @param {number} contactData.phone - Phone number of the contact.
 * @param {string} contactData.email - Email address of the contact.
 */
const addContact = ({
	firstName = "",
	lastName = "",
	fullName = `${firstName} ${lastName}`,
	phone = 0,
	email = "",
} = {}) => {
	// Load the existing contacts from the "contacts.json" file.
	const contacts = loadContacts();

	// Check if there is a contact with the same full name (duplicate contact).
	const duplicateContact = contacts.find((c) => c.fullName === fullName);

	if (duplicateContact) {
		// If a duplicate contact is found, log a message in red.
		console.log(chalk.red("Contact already exists."));
	} else {
		// Calculate a new ID for the contact (last contact's ID + 1).
		const newContact = {
			id: (contacts[contacts.length - 1]?.id ?? 0) + 1,
			firstName,
			lastName,
			fullName,
			phone,
			email,
		};

		// Create a new array of contacts by adding the new contact to the existing ones.
		const updatedContacts = [...contacts, newContact];

		// Save the updated contacts array to the "contacts.json" file.
		saveContacts(updatedContacts);

		// Log a success message in green.
		console.log(chalk.green("New contact saved."));
	}
};

/**
 * Remove a contact from the contacts list based on the provided identifier.
 *
 * @param {string|number} identifier - The identifier (contact ID or full name) of the contact to remove.
 */
const removeContact = (identifier) => {
	// Load the existing contacts from the "contacts.json" file.
	const contacts = loadContacts();

	// Filter out the contact that match the provided identifier.
	const filteredContacts = contacts.filter(({ id, fullName }) => {
		const conIdentifier = typeof identifier === "number" ? id : fullName;

		return conIdentifier !== identifier;
	});

	// Check if the number of contacts remains the same (no contact removed).
	if (!(contacts.length > filteredContacts.length)) {
		// If no contact is removed, log a message in red.
		console.log(chalk.red("Contact not found"));
	} else {
		// If a contact is removed, save the updated contacts array.
		saveContacts(filteredContacts);

		// Log a success message with the removed contact's identifier in green.
		console.log(chalk.green(`Contact ${identifier} removed.`));
	}
};

module.exports = { loadContacts, addContact, removeContact };
