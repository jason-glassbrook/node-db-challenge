const db = require ('./db')
const get = require ('./get')

module.exports =
  async (resource_value) => {
    const [ resource_id ] = await (
      db ('resources')
      .insert (resource_value)
    )

    const resource_record = await get (resource_id)

    return resource_record
  }
