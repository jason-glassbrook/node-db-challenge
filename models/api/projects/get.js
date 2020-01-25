const data = require ('./to-data')

module.exports =
  async (project_id) => {
    const [ project_record ] = await (
      data ('projects')
      .where ({ id : project_id })
    )

    return project_record
  }
