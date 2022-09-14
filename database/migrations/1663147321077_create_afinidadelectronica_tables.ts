import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'afinidadeselectronicas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('afinidades_electronicas_id')
        .unsigned()
        .references('afinidad_electronica_id')
        .inTable('elementos')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
