#! /usr/bin/env node

require('babel-register')
module.exports = require('./src/index.js')

if (require.main === module) {
  module.exports.default()
}
