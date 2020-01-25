const data = require ('./to-data')
const get = require ('./get')

module.exports =
  async (resource_id) => {
    const resource_record = await get (resource_id)

    await (
      data ('resources')
      .where ({ id : resource_id })
      .delete ()
    )

    return resource_record
  }
