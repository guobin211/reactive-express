/**
 * writable 可写流 fs, http, socket, std,
 * @author guobin201314@gmail.com on 2019-06-09
 */

const fs = require('fs');

const rs = fs.createReadStream('./read.txt', {flags: 'r'});
const ws = fs.createWriteStream('./write.txt');
