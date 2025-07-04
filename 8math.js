// module.exports = (a,b) => { // 2nd pattern
//     return a+b;
// };

// // module.exports = add; // 1st pattern

// const add = (a, b) => {
//     return a+b;
// }

// const subtract = (a, b) => {
//     return a-b;
// }

// module.exports = { // Third pattern
//     add: add,
//     subtract: subtract
// }

// module.exports.add = (a, b) => { // Forth pattern
//     return a+b;
// }

// module.exports.subtract = (a, b) => {
//     return a-b;
// }

exports.add = (a, b) => { // Fifth pattern
    return a+b;
}

exports.subtract = (a, b) => {
    return a-b;
}