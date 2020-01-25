const data = require ('./to-data')
const boolify = require ('../boolify')

module.exports =
  async (project_id) => {
    const [ project_record ] = await (
      data ('projects')
      .where ({ id : project_id })
    )

    return boolify (project_record, 'completed')
  }
