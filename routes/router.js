/***********************************************************
  ~/ - router
***********************************************************/

const express = require ('express')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// routes ///

router.use ('/', [
  require ('./api').router,
])

/// requests ///

router.route ('*')
.all ((ri, ro) => {
  ro
  .status (501)
  .json ({
    'error' : {
      'message' : 'not implemented',
      'method' : ri.method,
      'route' : ri.originalUrl,
    }
  })
})

/**************************************/

module.exports = router
