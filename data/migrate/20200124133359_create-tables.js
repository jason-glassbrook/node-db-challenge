
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
        .unique ()
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
    .createTable ('projects_resources', (t) => {
      // 1 project -> 0 or more resources
      // 1 resource -> 0 or more projects
      t
        .primary ([ 'project_id', 'resource_id' ])
      t
        .integer ('project_id').unsigned ()
        .notNullable ()
        .references ('id').inTable ('projects')
        .onUpdate ('CASCADE')
        .onDelete ('CASCADE')
      t
        .integer ('resource_id').unsigned ()
        .notNullable ()
        .references ('id').inTable ('resources')
        .onUpdate ('CASCADE')
        .onDelete ('CASCADE')
    })
    .createTable ('projects_tasks', (t) => {
      // 1 project -> 0 or more tasks
      // 1 task -> 1 project
      t
        .primary ([ 'task_id' ])
      t
        .integer ('project_id').unsigned ()
        .notNullable ()
        .references ('id').inTable ('projects')
        .onUpdate ('CASCADE')
        .onDelete ('CASCADE')
      t
        .integer ('task_id').unsigned ()
        .notNullable ()
        .references ('id').inTable ('tasks')
        .onUpdate ('CASCADE')
        .onDelete ('CASCADE')
    })
)

exports.down = (knex) => (
  knex.schema
    .dropTableIfExists ('projects_resources')
    .dropTableIfExists ('projects_tasks')
    .dropTableIfExists ('projects')
    .dropTableIfExists ('resources')
    .dropTableIfExists ('tasks')
)
