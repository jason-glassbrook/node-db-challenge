/***********************************************************
  ~/projects/:project_id - router
***********************************************************/

const express = require ('express')
const { api } = require ('./to-models')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// requests ///

router.route ('/projects/:project_id')
.get ((ri, ro) => {

  console.log (ri.params)

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
.put ((ri, ro) => {
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
.delete ((ri, ro) => {
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
