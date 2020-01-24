
exports.up = (knex) => (
  knex.schema
    .createTable ('projects', (t) => {
      t
        .increments ('id')
        .primary ()
      t
        .string ('name', 255)
        .notNullable ()
      t
        .text ('description')
        .nullable ()
      t
        .boolean ('completed')
        .notNullable ()
        .defaultTo (false)
    })
    .createTable ('resources', (t) => {
      t
        .increments ('id')
        .primary ()
      t
        .string ('name', 255)
        .notNullable ()
      t
        .text ('description')
        .nullable ()
    })
    .createTable ('tasks', (t) => {
      t
        .increments ('id')
        .primary ()
      t
        .string ('description', 255)
        .notNullable ()
      t
        .text ('notes')
        .nullable ()
      t
        .boolean ('completed')
        .notNullable ()
        .defaultTo (false)
    })
)

exports.down = (knex) => (
  knex.schema
    .dropTableIfExists ('projects')
    .dropTableIfExists ('resources')
    .dropTableIfExists ('tasks')
)
