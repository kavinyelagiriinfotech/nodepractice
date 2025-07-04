// const obj1 = {  // --> Rewrites object 1 while updating object 2
//     name: "Kavin"
// };

// const obj2 = obj1;
// obj2.name = "Manudheeran";

// console.log(obj2.name);

const obj1 = {
    name: "Kavin"
};

let obj2 = obj1; // Here reference to object 1 got breaked!!
obj2 = {
    name:"Manudheeran"
};

console.log(obj1.name);
console.log(obj2.name);