const data = require ('./to-data')

module.exports =
  async (projects_tasks_id) => {
    const [ projects_tasks_record ] = await (
      data ('projects_tasks')
      .where ({ id : projects_tasks_id })
    )

    return projects_tasks_record
  }
