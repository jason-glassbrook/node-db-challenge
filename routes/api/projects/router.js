/***********************************************************
  ~/projects - router
***********************************************************/

const express = require ('express')
const { api } = require ('./to-models')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// requests ///

router.route ('/projects')
.get ((ri, ro) => {

  api.projects.getAll ()
  .then ((projects) => {

    ro
    .status (200)
    .json (projects)

  })
  .catch ((error) => {

    console.log (error)

    ro
    .status (500)
    .json ({
      'error' : {
        'message' : `failed to get all projects`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})
.post ((ri, ro) => {

  const data = ri.body

  api.projects.push (data)
  .then ((project) => {

    ro
    .status (201)
    .json (project)

  })
  .catch ((error) => {

    console.log (error)

    ro
    .status (500)
    .json ({
      'error' : {
        'message' : `failed to add new project to projects`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })
})

/**************************************/

module.exports = router
