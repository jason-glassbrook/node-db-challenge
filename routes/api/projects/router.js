/***********************************************************
  ~/projects - router
***********************************************************/

const express = require ('express')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// routes ///

router.use ('/:project_id', require ('./_').router)

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
