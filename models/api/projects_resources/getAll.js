const db = require ('./db')

module.exports =
  async () => {
    const projects_resources_records = await (
      db ('projects_resources')
    )

    return projects_resources_records
  }
