const https = require("node:https") // HyperText Transfer Protocol (Secure)

const MAXCALL = 16;

const start = Date.now();

for (let i = 0; i < MAXCALL; i++) {
  https
    .request("https://www.google.com", (res) => {
        res.on("data", () => {} );
        res.on("end", () => {
            console.log(`Request: ${i + 1}`, Date.now() - start);
        });
    })
    .end();
}

// const crypto = require("node:crypto");

// process.env.UV_THREADPOOL_SIZE = 16;
// const MAXCALL = 16;

// const start = Date.now();

// for (let i = 0; i < MAXCALL; i++) {
//   crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
//     console.log(`Hash: ${i + 1}`, Date.now() - start);
//   });
// }

// const crypto = require("node:crypto");

// const start = Date.now();

// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");

// console.log("Hash: ", Date.now() - start);
