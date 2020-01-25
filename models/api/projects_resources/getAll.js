const data = require ('./to-data')

module.exports =
  async () => {
    const projects_resources_records = await (
      data ('projects_resources')
    )

    return projects_resources_records
  }
