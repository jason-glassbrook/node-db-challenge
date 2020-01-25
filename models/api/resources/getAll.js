const data = require ('./to-data')

module.exports =
  async () => {
    const resource_records = await (
      data ('resources')
    )

    return resource_records
  }
