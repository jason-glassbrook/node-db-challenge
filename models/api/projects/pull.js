const data = require ('./to-data')
const get = require ('./get')

module.exports =
  async (project_id) => {
    const project_record = await get (project_id)

    await (
      data ('projects')
      .where ({ id : project_id })
      .delete ()
    )

    return project_record
  }
