/***********************************************************
  ~/api - router
***********************************************************/

const express = require ('express')

/***************************************
  setup router
***************************************/

const router = express.Router ()

router.use ('/api', [
  express.json (),
  require ('./projects').router,
  require ('./projects_').router,
  require ('./projects_resources').router,
  require ('./projects_tasks').router,
  require ('./resources').router,
  require ('./resources_').router,
  require ('./tasks').router,
  require ('./tasks_').router,
])

// /// routes ///

// router.use (
//   '/projects',
//   require ('./projects').router,
// )
// router.use (
//   '/projects/:project_id',
//   require ('./projects_').router,
// )
// router.use (
//   '/projects/:project_id/resources',
//   require ('./projects_resources').router,
// )
// router.use (
//   '/projects/:project_id/tasks',
//   require ('./projects_tasks').router,
// )

/**************************************/

module.exports = router
