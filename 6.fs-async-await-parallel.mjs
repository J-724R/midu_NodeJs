const fs = require('node:fs/promises');

Promise.all([
    fs.readFile('./archivo.md', 'utf-8'),
    fs.readFile('./archivo2.txt', 'utf-8'),
]).then(([text, secondText])=>{
    console.log('primer texto: ', text);
    console.log('segundo texto: ', secondText);
})



console.log('Leyendo el primer archivo');
const text = await fs.readFile('./archivo.md', 'utf-8')
console.log('primer texto: ', text);

console.log(" ");
console.log("--> Hacer cosas mientras se lee el acrhivo...");
console.log(" ");

console.log('Leyendo el segundo archivo');

const text2 = await fs.readFile('./archivo2. txt', 'utf-8')
console.log('segundo archivo: ', text2);


