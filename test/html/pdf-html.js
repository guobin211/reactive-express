const fs = require('fs');
const workRoot = '/Users/guobin/vscode/reactive-express/test/html/';
const buff = fs.readFileSync(workRoot + 'UML.pdf');
console.log(buff);

// const blob = new Blob(buff, {type: 'application/pdf'});
// console.log(blob);