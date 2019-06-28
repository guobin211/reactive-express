/**
 * express
 *
 * @author GuoBin on
 */

const express = require('express');
const app = express();
const fs = require('fs');

const path = '/Users/guobin/vscode/reactive-express/file/11.JPG';
const data = fs.readFileSync(path);
console.log(data);
const base64 = data.toString('base64');
console.log(base64);
// buffer < base64
app.use(function (req, res, next) {
  res.send(base64);
});

app.listen(9000);
