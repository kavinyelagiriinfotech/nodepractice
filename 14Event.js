//Event driven programming..!

const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

myEmitter.on("greet", (role, task) => {
  // using this we register the event
  console.log(
    `Hello Manudheeran, You are a ${role}, You have to learn ${task}`
  );
});

myEmitter.on("greet", (role) => {
  if (role === "Software Engineer") {
    console.log("You need to involve in a project");
  }
});

console.log("Before Emitter");

myEmitter.emit("greet", "Software Engineer", "Node JS"); // Using .emit to trigger the event..!

console.log("After Emitter");
