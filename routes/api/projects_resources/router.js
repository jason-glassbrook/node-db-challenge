/***********************************************************
  ~/projects/:project_id/resources - router
***********************************************************/

const express = require ('express')
const { api } = require ('./to-models')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// requests ///

router.route ('/projects/:project_id/resources')
.get ((ri, ro) => {

  const { project_id } = ri.params

  api.projects_resources.get ({ project_id })
  .then ((resources) => {

    if (resources !== undefined && resources !== null) {

      ro
      .status (200)
      .json (resources)

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
        'message' : `failed to get all resources of project with id ${project_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})
.post ((ri, ro) => {

  const { project_id } = ri.params
  const data = { ...ri.body, project_id }

  api.resources.push (data)
  .then ((resource) => {

    if (resource !== undefined && resource !== null) {

      ro
      .status (200)
      .json (resource)

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
        'message' : `failed to push new resource to resources of project with id ${project_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})

/**************************************/

module.exports = router
