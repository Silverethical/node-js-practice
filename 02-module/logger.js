/**
 * A constant representing a name.
 * @type {string}
 */
const myName = "Saber";

/**
 * Function that logs a greeting message with the provided 'name'.
 *
 * @param {string} name - The name to include in the greeting message.
 */
const sayHi = (name) => console.log(`Hello ${name}`);

module.exports = {
	myName,
	sayHi,
};
