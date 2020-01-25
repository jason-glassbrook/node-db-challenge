const data = require ('./to-data')

module.exports =
  async () => {
    let resource_records = await (
      data ('resources')
    )

    return resource_records
  }
