 const fs = require("node:fs/promises");

 console.log("Before Promise");

 fs.readFile('./17file.txt', 'utf-8') //JS Async..!
 .then( (data) => console.log(data))
 .catch( (error) => console.log(error))

 console.log("After Promises")