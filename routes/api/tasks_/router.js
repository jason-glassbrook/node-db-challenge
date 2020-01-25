/***********************************************************
  ~/tasks/:task_id - router
***********************************************************/

const express = require ('express')
const { api } = require ('./to-models')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// requests ///

router.route ('/tasks/:task_id')
.get ((ri, ro) => {

  const { task_id } = ri.params

  api.tasks.get (task_id)
  .then ((task) => {

    if (task) {

      ro
      .status (200)
      .json (task)

    }
    else {

      ro
      .status (404)
      .json ({
        'error' : {
          'message' : `could not find task with id ${task_id}`,
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
        'message' : `failed to get task with id ${task_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})
.put ((ri, ro) => {

  const { task_id } = ri.params
  const data = ri.body

  api.tasks.set (task_id, data)
  .then ((task) => {

    if (task) {

      ro
      .status (200)
      .json (task)

    }
    else {

      ro
      .status (404)
      .json ({
        'error' : {
          'message' : `could not find task with id ${task_id}`,
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
        'message' : `failed to set changes to task with id ${task_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})
.delete ((ri, ro) => {

  const { task_id } = ri.params

  api.tasks.pull (task_id)
  .then ((task) => {

    if (task) {

      ro
      .status (200)
      .json (task)

    }
    else {

      ro
      .status (404)
      .json ({
        'error' : {
          'message' : `could not find task with id ${task_id}`,
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
        'message' : `failed to pull task with id ${task_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})

/**************************************/

module.exports = router
