const data = require ('./to-data')
const get = require ('./get')

module.exports =
  async (task_value) => {
    const { project_id } = task_value

    task_value = {
      'description' : task_value.description,
      'notes' : task_value.notes,
      'completed' : task_value.completed,
    }

    const [ task_id ] = await (
      data ('tasks')
      .insert (task_value)
    )

    let task_record = await get (task_id)

    return task_record
  }
