// Import the chalk library for colored output in the console.
const chalk = require("chalk");

// Import the 'sayHi' and 'myName' variables from the 'logger' module.
const { sayHi, myName } = require("./logger");

// Log 'myName' in blue.
sayHi(chalk.blue(myName));
