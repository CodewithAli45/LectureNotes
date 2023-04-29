// const crypto = require('crypto');
// const start = Date.now();
// // pbkdf -> password based key derivation function
// const code = crypto.pbkdf2Sync("password", "salt", 5000, 512, "sha512");
// console.log(code);
// console.log(Date.now() - start);

const os = require('os');
console.log('CPU length', os.cpus().length);

process.env.UV_THREADPOOL_SIZE = 10;
// console.log(process.env);

const crypto = require('crypto');
const start = Date.now();
const MAX_CALLS = 10;
for(let i = 0; i < MAX_CALLS; i++){
    crypto.pbkdf2('password', 'salt', 10, 256, 'sha512', () => {
        console.log(`Iteration ${i+1}`, Date.now() - start);
    });
}
console.log(2+2-'2');