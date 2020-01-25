const data = require ('./to-data')

module.exports =
  async (projects_resources_id) => {
    const [ projects_resources_record ] = await (
      data ('projects_resources')
      .where ({ id : projects_resources_id })
    )

    return projects_resources_record
  }
