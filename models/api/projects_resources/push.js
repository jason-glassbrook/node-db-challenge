const data = require ('./to-data')
const get = require ('./get')

module.exports =
  async (projects_resources_value) => {
    const [ projects_resources_id ] = await (
      data ('projects_resources')
      .insert (projects_resources_value)
    )

    let projects_resources_record = await get (projects_resources_id)

    return projects_resources_record
  }
