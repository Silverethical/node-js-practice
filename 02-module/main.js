// Import the chalk library for colored output in the console.
const chalk = require("chalk");

// Import the 'sayHi' and 'myName' variables from the 'logger' module.
const { sayHi, myName } = require("./logger");

// Log 'myName' in blue.
sayHi(chalk.blue(myName));

// Print a visual separator to the console for clarity.
console.log("--------------------------");

// Import the 'os' module to access OS-related information.
const os = require("os");

// Print the platform (e.g., "linux", "win32") to the console.
console.log("platform:", os.platform());

// Print the architecture (e.g., "x64") to the console.
console.log("arch:", os.arch());

// Print information about the current user to the console.
console.log("userInfo:", os.userInfo());

// Print the OS release (e.g., "10.0.19041") to the console.
console.log("release:", os.release());

// Print the hostname (e.g., computer name) to the console.
console.log("hostname:", os.hostname());

// Print the system uptime (in seconds) to the console.
console.log("uptime:", os.uptime());
