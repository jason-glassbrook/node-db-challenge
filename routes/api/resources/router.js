/***********************************************************
  ~/resources - router
***********************************************************/

const express = require ('express')
const models = require ('./to-models')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// requests ///

router.route ('/')
.get ((ri, ro) => {
  ro
  .status (501)
  .json ({
    'error' : {
      'message' : 'working on it...',
      'method' : ri.method,
      'route' : ri.originalUrl,
    }
  })
})
.post ((ri, ro) => {
  ro
  .status (501)
  .json ({
    'error' : {
      'message' : 'working on it...',
      'method' : ri.method,
      'route' : ri.originalUrl,
    }
  })
})

/**************************************/

module.exports = router
