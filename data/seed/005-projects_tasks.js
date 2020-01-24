
exports.seed = (knex) => (
  // Deletes ALL existing entries
  knex ('table_name')
  .delete ()
  .then (() => (
    // Inserts seed entries
    knex ('table_name').insert ([
        { colName : 'rowValue1' },
        { colName : 'rowValue2' },
        { colName : 'rowValue3' },
      ])
    )
  )
)
