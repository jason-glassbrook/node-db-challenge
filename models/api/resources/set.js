const data = require ('./to-data')
const get = require ('./get')

module.exports =
  async (resource_id, resource_value) => {
    await (
      data ('resources')
      .where ({ id : resource_id })
      .update (resource_value)
    )

    const resource_record = await get (resource_id)

    return resource_record
  }
