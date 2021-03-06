const {
    generateKeyPairSync,
    createSign,
    createVerify,
  } = require('crypto');
  
  const { privateKey, publicKey } = generateKeyPairSync('ec', {
    namedCurve: 'secp256k1'
    // modulusLength : 570 for dsa
  });
  
  const sign = createSign('SHA256');
  sign.write('some data to sign');
  sign.end();
  const signature = sign.sign(privateKey, 'hex');
  console.log(signature)
  
  const verify = createVerify('SHA256');
  verify.write('some data to sign');
  verify.end();
  console.log(verify.verify(publicKey, signature, 'hex'));