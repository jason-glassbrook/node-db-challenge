const data = require ('./to-data')
const boolify = require ('../boolify')

module.exports =
  async () => {
    const project_records = await (
      data ('projects')
    )

    return project_records.map (
      (record) => boolify (record, 'completed')
    )
  }
