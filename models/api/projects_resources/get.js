const data = require ('./to-data')

module.exports =
  async (projects_resources_query) => {
    let projects_resources_records = await (
      data ('projects_resources')
      .where (projects_resources_query)
    )

    return projects_resources_records
  }
