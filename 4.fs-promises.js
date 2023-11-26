const fs = require('node:fs/promises');

console.log('Leyendo el primer archivo');
fs.readFile('./archivo.md', 'utf-8') 
    .then(text => {
        console.log('primer texto: ', text);
    })

console.log(" ");
console.log("--> Hacer cosas mientras se lee el acrhivo...");
console.log(" ");

console.log('Leyendo el segundo archivo');
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('segundo archivo: ', text);
    })