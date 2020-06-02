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

  const { project_id } = ri.params

  api.projects.get (project_id)
  .then ((project) => {

    if (project !== undefined && project !== null) {

      ro
      .status (200)
      .json (project)

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
        'message' : `failed to get project with id ${project_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})
.put ((ri, ro) => {

  const { project_id } = ri.params
  const data = ri.body

  api.projects.set (project_id, data)
  .then ((project) => {

    if (project !== undefined && project !== null) {

      ro
      .status (200)
      .json (project)

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
        'message' : `failed to set changes to project with id ${project_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})
.delete ((ri, ro) => {

  const { project_id } = ri.params

  api.projects.pull (project_id)
  .then ((project) => {

    if (project !== undefined && project !== null) {

      ro
      .status (200)
      .json (project)

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
        'message' : `failed to pull project with id ${project_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})

/**************************************/

module.exports = router
