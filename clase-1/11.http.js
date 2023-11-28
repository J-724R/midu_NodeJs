const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log("request received");
    res.end('Hola mundo')
})


server.listen(1108, () => {
    console.log(`Server listening on port 1108`);
})

// server.listen(0, () => {
//     console.log(`Server listening on port http://localhost:${server.address().port}`);
// })


// finding free port

const desiredPort = process.env.PORT ?? 3000

const { findAvailablePort } = require('./12.free-port')

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`server listening on port http://localhost:${port}`);
    })
})