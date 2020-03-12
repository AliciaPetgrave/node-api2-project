require('dotenv').config();
const server = require('./api/server')

const port = process.env.PORT || 5002
server.listen(port, () => {
    console.log(`\n** Server working on ${port}`)
})