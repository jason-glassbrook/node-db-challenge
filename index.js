/**********************************************************/

require ('dotenv').config ()

const server = require ('./server.js')
const port = process.env.PORT || 10124

server.listen (port, () => {
  console.log (`it's alive!`)
  console.log (`\n>>> listening on port ${port} <<<\n`)
})

/**************************************/
