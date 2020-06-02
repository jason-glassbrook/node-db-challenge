const data = require ('./to-data')
const boolify = require ('../boolify')

module.exports =
  async () => {
    let project_records = await (
      data ('projects')
    )

    project_records = project_records.map (
      (record) => boolify (record, 'completed')
    )

    return project_records
  }
