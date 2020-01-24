const db = require ('./db')

module.exports =
  async () => {
    const project_records = await (
      db ('projects')
    )

    return project_records
  }
