const data = require ('./to-data')

module.exports =
  async (resource_id) => {
    let [ resource_record ] = await (
      data ('resources')
      .where ({ id : resource_id })
      )

    return resource_record
  }
