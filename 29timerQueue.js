//SetTimeout is used here

//Syntax for SetTimeout 

// setTimeout( () => {
//     console.log("TImeout here")
// }, 0)

// setTimeout( () => {
//     console.log("Timeout-1 here")
// }, 0)
// setTimeout( () => {
//     console.log("Timeout-2 here")
//     process.nextTick( () => {
//         console.log("Nextick inside timer");
//     })
// }, 0)
// setTimeout( () => {
//     console.log("Timeout-3 here")
// }, 0)
// process.nextTick( () => console.log("Nexttick- 1"));
// process.nextTick( () => {
//     console.log("NextTick - 2");
//     process.nextTick( () => {
//         console.log("Inner nexttick inside nextTick")
//     })
// })
// process.nextTick( () => console.log("NextTick - 3"));

// Promise.resolve().then(() => console.log("Promise resolve -1"));
// Promise.resolve().then( () => {
//     console.log("Promise resolve - 2");
//     process.nextTick( () => {
//         console.log("NextTick inside promise");
//     })
// })
// Promise.resolve().then( () => {
//     console.log("Promise resolve - 3")
// })

setTimeout( () => {
    console.log("Timeout - 1 here")
}, 1000)
setTimeout( () => {
    console.log("Timeout - 2 here")
}, 500)
setTimeout( () => {
    console.log("Timeout - 3 here")
}, 0)

