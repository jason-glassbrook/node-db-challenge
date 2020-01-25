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

  const { project_id } = ri.params

  api.projects_tasks.get ({ project_id })
  .then ((tasks) => {

    if (tasks !== undefined && tasks !== null) {

      ro
      .status (200)
      .json (tasks)

    }
    else {

      ro
      .status (404)
      .json ({
        'error' : {
          'message' : `could not find project with id ${project_id}`,
          'method' : ri.method,
          'route' : ri.originalUrl,
        }
      })

    }

  })
  .catch ((error) => {

    console.log (error)

    ro
    .status (500)
    .json ({
      'error' : {
        'message' : `failed to get all tasks of project with id ${project_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})
.post ((ri, ro) => {

  const { project_id } = ri.params
  const data = { ...ri.body, project_id }

  api.tasks.push (data)
  .then ((task) => {

    if (task !== undefined && task !== null) {

      ro
      .status (200)
      .json (task)

    }
    else {

      ro
      .status (404)
      .json ({
        'error' : {
          'message' : `could not find project with id ${project_id}`,
          'method' : ri.method,
          'route' : ri.originalUrl,
        }
      })

    }

  })
  .catch ((error) => {

    console.log (error)

    ro
    .status (500)
    .json ({
      'error' : {
        'message' : `failed to push new task to tasks of project with id ${project_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})

/**************************************/

module.exports = router
