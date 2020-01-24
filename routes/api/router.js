/***********************************************************
  ~/api - router
***********************************************************/

const express = require ('express')

/***************************************
  setup router
***************************************/

const router = express.Router ()

router.use ([
  express.json (),
])

/// routes ///

router.use ('/projects', require ('./projects').router)

/**************************************/

module.exports = router
