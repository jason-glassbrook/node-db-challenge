const data = require ('./to-data')
const get = require ('./get')

module.exports =
  async (projects_tasks_value) => {
    const [ projects_tasks_id ] = await (
      data ('projects_tasks')
      .insert (projects_tasks_value)
    )

    let projects_tasks_record = await get (projects_tasks_id)

    return projects_tasks_record
  }
