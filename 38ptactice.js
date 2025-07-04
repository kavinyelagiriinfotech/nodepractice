const path = require("node:path");
const os = require("node:os");

console.log(__filename);
console.log(path.__filename);// undefined
console.log(path.basename(__filename));

console.log(os.type());
console.log(os.version());

const http = require("node:http");
