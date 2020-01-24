const db = require ('./db')
const get = require ('./get')

module.exports =
  async (project_value) => {
    const [ project_id ] = await (
      db ('projects')
      .insert (project_value)
    )

    const project_record = await get (project_id)

    return project_record
  }
