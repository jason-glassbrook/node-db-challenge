const data = require ('./to-data')
const get = require ('./get')

module.exports =
  async (resource_value) => {
    const { project_id } = resource_value

    resource_value = {
      'name' : resource_value.name,
      'description' : resource_value.description,
    }

    const [ resource_id ] = await (
      data ('resources')
      .insert (resource_value)
    )

    let resource_record = await get (resource_id)

    return resource_record
  }
