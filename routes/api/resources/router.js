/***********************************************************
  ~/resources - router
***********************************************************/

const express = require ('express')
const { api } = require ('./to-models')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// requests ///

router.route ('/resources')
.get ((ri, ro) => {

  api.resources.getAll ()
  .then ((resources) => {

    ro
    .status (200)
    .json (resources)

  })
  .catch ((error) => {

    console.log (error)

    ro
    .status (500)
    .json ({
      'error' : {
        'message' : 'failed to get all resources',
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})
.post ((ri, ro) => {

  const data = ri.body

  api.resources.push (data)
  .then ((resource) => {

    ro
    .status (201)
    .json (resource)

  })
  .catch ((error) => {

    console.log (error)

    ro
    .status (500)
    .json ({
      'error' : {
        'message' : 'failed to add new resource to resources',
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })
})

/**************************************/

module.exports = router
