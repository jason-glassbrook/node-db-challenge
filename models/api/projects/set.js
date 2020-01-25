const data = require ('./to-data')
const get = require ('./get')

module.exports =
  async (project_id, project_value) => {
    await (
      data ('projects')
      .where ({ id : project_id })
      .update (project_value)
    )

    const project_record = await get (project_id)

    return project_record
  }
