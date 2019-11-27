const { readFileSync } = require('fs')
const path  = require('path')

function readPackage() {
  const packageStr = readFileSync(path.resolve(__dirname, '..', 'package.json')).toString()
  const packageObj = JSON.parse(packageStr)
  if (packageObj.version !== '0.0.1') {
    console.log(`${packageObj.name} version: ${packageObj.version}`)
  }
}

readPackage();
