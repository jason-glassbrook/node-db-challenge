const data = require ('./to-data')

module.exports =
  async () => {
    const project_records = await (
      data ('projects')
    )

    return project_records
  }
