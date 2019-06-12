const crypto = require('crypto');


function testCertificate() {
  const secret = 'abcde';
  const hash = crypto.createHmac('sha256', secret).update('myKey').digest('hex');
  console.log(hash);
}

testCertificate();
let encrypted = '';

function cipherStream() {
  const cipher = crypto.createCipher('aes192', 'myKey');
  cipher.on('readable', () => {
    const data = cipher.read();
    if (data) {
      encrypted += data.toString('hex');
    }
  });
  cipher.on('end', () => {
    console.log(encrypted);
  });
  cipher.write('some text');
  cipher.end();
}

cipherStream();

