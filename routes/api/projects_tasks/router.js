/***********************************************************
  ~/projects/:project_id/tasks - router
***********************************************************/

const express = require ('express')
const { api } = require ('./to-models')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// requests ///

router.route ('/projects/:project_id/tasks')
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
