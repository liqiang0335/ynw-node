const fs = require("fs");
const util = require("util");

exports.exists = util.promisify(fs.exists);
exports.readFile = util.promisify(fs.readFile);
exports.writeFile = util.promisify(fs.writeFile);
exports.readdir = util.promisify(fs.readdir);
exports.stat = util.promisify(fs.stat);
