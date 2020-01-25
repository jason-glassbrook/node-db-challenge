const data = require ('./to-data')

module.exports =
  async (step_id) => {
    const [ step_record ] = await (
      data ('steps')
      .where ({ id : step_id })
      )

    return step_record
  }
