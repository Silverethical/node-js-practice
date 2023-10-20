// Import the chalk library for colored output in the console.
const chalk = require("chalk");

/**
 * Function that logs messages with blue color using chalk.
 *
 * @param {...any} params - The messages or data to log with blue color.
 */
const blueLog = (...params) => console.log(chalk.blue(...params));

// Export the 'blueLog' function as a module.
module.exports = blueLog;
