// const localModule = require('./path-to-module'); // Local module importing
// const fs = require("node:fs"); // Built-in module impoprting
//Importing third-party-module

const upperCase = require("upper-case").upperCase;

function greet(name) {
    console.log(upperCase(`Hey ${name}, you are a software developer.`))
}

greet("Manudheeran");

module.exports = greet;