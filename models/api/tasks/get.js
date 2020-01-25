const data = require ('./to-data')
const boolify = require ('../boolify')

module.exports =
  async (task_id) => {
    const [ task_record ] = await (
      data ('tasks')
      .where ({ id : task_id })
      )

      return boolify (task_record, 'completed')
  }
