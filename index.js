const server = require('./api/server')

const port = 5002
server.listen(port, () => {
    console.log(`\n** Server working on ${port}`)
})