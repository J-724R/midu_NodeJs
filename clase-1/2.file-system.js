const fs = require('node:fs')

const stats = fs.statSync('./archivo.md')

console.log(
    stats.isDirectory(),
    stats.isFile(),
    stats.isSymbolicLink(),
    stats.size,
);