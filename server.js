/***********************************************************
  server
***********************************************************/

const express = require ('express')
const helmet = require ('helmet')
const morgan = require ('morgan')

/***************************************
  setup server
***************************************/

const server = express ()

server.use ([
  helmet (),
  morgan ('dev'),
])

/// routes ///

server.use ('/', require ('./routes').router)

/**************************************/

module.exports = server
