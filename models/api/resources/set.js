const data = require ('./to-data')
const get = require ('./get')

module.exports =
  async (resource_id, resource_value) => {
    const { project_id } = resource_value

    resource_value = {
      'description' : resource_value.description,
      'notes' : resource_value.notes,
      'completed' : resource_value.completed,
    }

    await (
      data ('resources')
      .where ({ id : resource_id })
      .update (resource_value)
    )

    let resource_record = await get (resource_id)

    return resource_record
  }
