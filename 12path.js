const path = require('node:path');

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('./data.json'));

console.log(path.join("Folder", "Subfolder", "file"));
console.log(path.join("/Folder", "Subfolder", "file"));
console.log(path.join("/Folder", "//Subfolder", "file"));
console.log((path.join("/Folder", "///Subfolder", "file")) + '\n');

console.log(path.resolve("Folder", "Subfolder", "file"));
console.log(path.resolve("/Folder", "Subfolder", "file"));
console.log(path.resolve("/Folder", "//Subfolder", "file"));
console.log(path.resolve("/Folder", "///Subfolder", "file"));