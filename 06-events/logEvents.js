/**
 * Logs an event and associated data to the console.
 *
 * @param {string} event - The name of the event.
 * @param {any} data - The data associated with the event.
 */
const logEvents = (event, data) => console.log(`${event}:`, data);

module.exports = logEvents;
