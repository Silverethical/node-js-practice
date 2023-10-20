// Import the 'blueLog' module.
const blueLog = require("./blueLog");

// Register an event listener for the 'beforeExit' event.
process.on("beforeExit", (code) => blueLog("Process beforeExit", code));

// Register an event listener for the 'exit' event.
process.on("exit", (code) => blueLog("Process exit", code));

// Log a message that runs immediately when the script starts.
blueLog("This runs first");
