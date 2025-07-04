function greet(name) {
    console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
    name = "Manudheeran";
    callback(name);
}

higherOrderFunction(greet)