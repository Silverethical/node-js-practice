// Import the 'blueLog' module.
const blueLog = require("./blueLog");

// Log the value of the 'NODE_ENV' environment variable.
blueLog(process.env.NODE_ENV);

// Log the title of the Node.js process.
blueLog(process.title);

// Log the process ID (PID).
blueLog(process.pid);

// Log the CPU architecture of the system.
blueLog(process.arch);

// Log the Node.js version.
blueLog(process.version);

// Log the platform on which Node.js is running.
blueLog(process.platform);

// Log the current working directory.
blueLog(process.cwd());

// Log each command line argument with their respective indices.
process.argv.forEach((value, index) => blueLog(`${index}: ${value}`));

// Terminate the Node.js process by sending a 'SIGTERM' signal.
process.kill();

// Terminate the Node.js process with an exit code of 0 (successful exit).
process.exit();
