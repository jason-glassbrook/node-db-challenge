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

router.use (
  '/projects',
  require ('./projects').router,
)
router.use (
  '/projects/:project_id',
  require ('./projects_').router,
)
router.use (
  '/projects/:project_id/resources',
  require ('./projects_resources').router,
)
router.use (
  '/projects/:project_id/tasks',
  require ('./projects_tasks').router,
)

/**************************************/

module.exports = router
