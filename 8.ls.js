const fs = require('node:fs') 

fs.readdir('.', (err, files) => {
    if (err) {
        console.error('Error al leer el directorio: ', err);
        return;
    }

    files.forEach(file => {
        console.log(file);
    })
})

// con try catch

const fsP = require('node:fs/promises')

fsP.readdir('.')
    .then(files => {
        files.forEach(file => {
            console.log(file);
        })
    })
    .catch(err => {
        if (err) {
            console.error('Error al leer el directorio: ', err)
        }
    })