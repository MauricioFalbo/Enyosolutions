import { Knex } from 'knex'

export async function up(knex: Knex): Promise<Knex.SchemaBuilder> {
  return knex.schema
    .createTable('imports', table => {
      table.increments('id').primary().notNullable()
      table.date('import_date')
      table.text('raw_content')

      table.timestamps(true, true)
    })
}

export async function down(knex: Knex): Promise<Knex.SchemaBuilder> {
  return knex.schema.dropTableIfExists('imports')
}
