const fs = require('fs');
const { Console } = require('console');
/**
 * flag
 * a  追加
 * w  打开文件写入
 * r  打开文件读取，如果不存在抛出异常
 * r+ 打开文件读取，如果不存在创建文件
 * @type {WriteStream}
 */
const output = fs.createWriteStream('./stdout.log', {flags: 'a'});
const errorLog = fs.createWriteStream('./error.log');

const logger = new Console({
  stdout: output,
  stderr: errorLog
});

const count = 5;

logger.log('count: %d', count);
logger.error('count: %d', count);