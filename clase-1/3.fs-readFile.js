const fs = require('node:fs');

// Solo para los modulos nativos que no tiene promesas
const {promisify} = require('node:util')
const readFile = promisify(fs.readFile)

console.log('Leyendo el primer archivo');
fs.readFile('./archivo.md', 'utf-8', (err, text)=> {
    console.log(text);
});

console.log(" ");
console.log("--> Hacer cosas mientras se lee el acrhivo...");
console.log(" ");

console.log('Leyendo el segundo archivo');
fs.readFile('./archivo2.txt', 'utf-8', (err, text)=> {
    console.log(text);
});