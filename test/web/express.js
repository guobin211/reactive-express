/**
 * express
 *
 * @author GuoBin on
 */

const express = require('express');
const app = express();
const fs = require('fs');

const path = '/Users/guobin/vscode/reactive-express/images/swagger.png';
const data = fs.readFileSync(path);
console.log(data);
const base64 = data.toString('base64');
console.log(base64);
// buffer < base64
app.use(function (req, res, next) {
  res.send(data);
});

app.listen(9000);
