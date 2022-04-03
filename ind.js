const crypto = require('crypto');
const buffer = require('buffer');
const fs = require('fs')


 
// Creating a private key
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});
// console.log(privateKey,publicKey)

// Using Hashing Algorithm
const algorithm = "SHA256";
 
// Converting string to buffer
let datsa = {
  name : "jhshf"
}
let strings = JSON.stringify(datsa)

const data = Buffer.from(strings);

// Sign the data and returned signature in buffer
const signature = crypto.sign(algorithm, data , privateKey);
 console.log(signature)

fs.writeFileSync('data.json',signature)


// Verifying signature using crypto.verify() function
const isVerified = crypto.verify(algorithm, data, publicKey, signature);
 
// Printing the result
console.log(`Is signature verified: ${isVerified}`);


