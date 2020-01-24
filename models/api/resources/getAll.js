const db = require ('./db')

module.exports =
  async () => {
    const resource_records = await (
      db ('resources')
    )

    return resource_records
  }
