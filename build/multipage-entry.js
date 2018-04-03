let fs = require('fs')
let path = require('path')
let entryPath = path.resolve(__dirname, '../src/multipage')

let entry = fs.readdirSync(entryPath).reduce((o, dirname) => {
  o[dirname] = path.join(entryPath, dirname)
  return o
}, {})

console.log('多页路由数组', entry)

module.exports = entry
