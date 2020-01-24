/***********************************************************
  ~/:project_id - router
***********************************************************/

const express = require ('express')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// routes ///

router.use ('/resources', require ('./resources').router)
router.use ('/tasks', require ('./tasks').router)

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
