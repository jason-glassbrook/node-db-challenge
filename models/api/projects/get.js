const data = require ('./to-data')
const boolify = require ('../boolify')

module.exports =
  async (project_id) => {
    let [ project_record ] = await (
      data ('projects')
      .where ({ id : project_id })
    )

    project_record = boolify (project_record, 'completed')

    return project_record
  }
