// Import the 'yargs' library for command-line argument parsing.
const yargs = require("yargs");

// Import functions for managing contacts from "contactsHelpers" module.
const {
	loadContacts,
	addContact,
	removeContact,
} = require("./contactsHelpers");

// Set the script name for the command-line interface.
yargs.scriptName("Contact Manager");

// Set the usage message for the command-line interface.
yargs.usage("$0 <command> [args]");

// Define a command for listing all contacts.
yargs.command({
	// Command aliases
	aliases: ["l"],
	// Command name
	command: "list",
	// Description of the command
	describe: "[List All the Contacts]",
	// Handler function for the "list" command to display contacts in a table.
	handler() {
		console.table(loadContacts());
	},
});

// Define a command for creating a new contact.
yargs.command({
	aliases: ["c"],
	command: "create",
	describe: "[Create New Contact]",
	builder: {
		// Define command-line options (arguments) for creating a contact.
		firstName: {
			// Alias for the option
			alias: "f",
			// Data type of the option
			type: "string",
			// Option is required
			demandOption: true,
			// Description of the option
			describe: "Person's First Name",
		},
		lastName: {
			alias: "l",
			type: "string",
			demandOption: true,
			describe: "Person's Last Name",
		},
		phone: {
			alias: "p",
			type: "number",
			demandOption: true,
			describe: "Person's Phone Number",
		},
		email: {
			alias: "e",
			type: "string",
			demandOption: false,
			describe: "Person's Email Address",
		},
	},
	// Handler function for the "create" command to add a new contact.
	handler({ firstName, lastName, phone, email }) {
		addContact({ firstName, lastName, phone, email });
	},
});

// Define a command for removing a contact.
yargs.command({
	aliases: ["r"],
	command: "remove",
	describe: "[Remove Contact]",
	builder: {
		identifier: {
			alias: "i",
			demandOption: true,
			describe: "Person's id or fullName",
		},
	},
	// Handler function for the "remove" command to remove a contact.
	handler({ identifier }) {
		removeContact(identifier);
	},
});

// Parse the command-line arguments and execute the appropriate command handler.
yargs.parse();
