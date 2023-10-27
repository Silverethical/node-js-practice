// Import the 'EventEmitter' class from the 'events' module.
const { EventEmitter } = require("events");

// Create a new instance of the EventEmitter class.
const em = new EventEmitter();

// Import the 'logEvents' module to log events data.
const logEvents = require("./logEvents");

// Define an array of event names.
const events = ["FirstEvent", "SecondEvent"];

// For each event name in the 'events' array, add an event listener.
events.map((event) => em.addListener(event, (data) => logEvents(event, data)));

// Emit the "FirstEvent".
em.emit("FirstEvent", "Saber");

// Emit the "SecondEvent".
em.emit("SecondEvent", "Vafa");
