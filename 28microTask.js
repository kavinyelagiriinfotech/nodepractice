//Microtask Queue

process.nextTick( () => console.log("Nexttick- 1"));
process.nextTick( () => {
    console.log("NextTick - 2");
    process.nextTick( () => {
        console.log("Inner nexttick inside nextTick")
    })
})
process.nextTick( () => console.log("NextTick - 3"));

Promise.resolve().then(() => console.log("Promise resolve -1"));
Promise.resolve().then( () => {
    console.log("Promise resolve - 2");
    process.nextTick( () => {
        console.log("NextTick inside promise");
    })
})
Promise.resolve().then( () => {
    console.log("Promise resolve - 3")
})

// Promise.resolve().then( () => console.log("Inside promise.resolve"));
// process.nextTick( () => console.log("Inside nextTick"));


// console.log("Starting");

// process.nextTick( () => console.log("Inside nextTick queue"));

// console.log("Ending")