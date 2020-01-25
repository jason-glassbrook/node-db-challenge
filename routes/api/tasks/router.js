/***********************************************************
  ~/tasks - router
***********************************************************/

const express = require ('express')
const { api } = require ('./to-models')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// requests ///

router.route ('/')
.get ((ri, ro) => {

  api.tasks.getAll ()
  .then ((tasks) => {

    ro
    .status (200)
    .json (tasks)

  })
  .catch ((error) => {

    console.log (error)

    ro
    .status (500)
    .json ({
      'error' : {
        'message' : 'failed to get all tasks',
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})
.post ((ri, ro) => {

  const data = ri.body

  api.tasks.push (data)
  .then ((task) => {

    ro
    .status (201)
    .json (task)

  })
  .catch ((error) => {

    console.log (error)

    ro
    .status (500)
    .json ({
      'error' : {
        'message' : 'failed to add new task to tasks',
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })
})

/**************************************/

module.exports = router
