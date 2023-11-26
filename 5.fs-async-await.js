// no se puede usar await en cjs en top level
// debe estar wrapeado o con una IIFE

const fs = require('node:fs/promises');

// IIFE - Inmediatly Invoked Fuction Expression
(
    async()=>{
        console.log('Leyendo el primer archivo');
        const text = await fs.readFile('./archivo.md', 'utf-8')
        console.log('primer texto: ', text);

        console.log(" ");
        console.log("--> Hacer cosas mientras se lee el acrhivo...");
        console.log(" ");
        
        console.log('Leyendo el segundo archivo');
        
        const text2 = await fs.readFile('./archivo2. txt', 'utf-8')
        console.log('segundo archivo: ', text2);
    }
)()


