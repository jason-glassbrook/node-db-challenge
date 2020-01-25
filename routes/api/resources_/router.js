/***********************************************************
  ~/resources/:resource_id - router
***********************************************************/

const express = require ('express')
const { api } = require ('./to-models')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// requests ///

router.route ('/resources/:resource_id')
.get ((ri, ro) => {

  const { resource_id } = ri.params

  api.resources.get (resource_id)
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
          'message' : `could not find resource with id ${resource_id}`,
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
        'message' : `failed to get resource with id ${resource_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})
.put ((ri, ro) => {

  const { resource_id } = ri.params
  const data = ri.body

  api.resources.set (resource_id, data)
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
          'message' : `could not find resource with id ${resource_id}`,
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
        'message' : `failed to set changes to resource with id ${resource_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})
.delete ((ri, ro) => {

  const { resource_id } = ri.params

  api.resources.pull (resource_id)
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
          'message' : `could not find resource with id ${resource_id}`,
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
        'message' : `failed to pull resource with id ${resource_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})

/**************************************/

module.exports = router
