const path = require('node:path')

//bara separadora de carpetas segun SO
console.log(path.sep);

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath);

const base = path.basename('/tmp/secret-files/password.txt')
console.log(base);

const filename = path.basename('/tmp/Ryuk/secret-files/password.md', '.md')
console.log(filename);

const extension = path.extname('ryuk.super.image.png')
console.log(extension);
