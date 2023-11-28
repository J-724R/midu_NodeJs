//argumentos de entrada
console.log(process.argv);

// controlar enventos del proceso
process.on('exit', ()=> {
    // limpiar memoria
})

// current working directory
console.log(process.cwd())

// platform
console.log(process.env.perrito);


// controlar el proceso y su salida
process.exit(1)

