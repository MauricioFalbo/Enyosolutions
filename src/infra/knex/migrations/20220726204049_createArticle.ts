import { Knex } from 'knex'

export async function up(knex: Knex): Promise<Knex.SchemaBuilder> {
  return knex.schema
    .createTable('articles', table => {
      table.increments('id').primary().notNullable()
      table.string('external_id', 500).unique()
      table.date('import_date')
      table.text('title')
      table.text('description')
      table.date('publication_date')
      table.text('link')
      table.text('main_picture')

      table.timestamps(true, true)
    })
}

export async function down(knex: Knex): Promise<Knex.SchemaBuilder> {
  return knex.schema.dropTableIfExists('articles')
}
