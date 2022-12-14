import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'puntosdefusion'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('punto_de_fusion_en_grados_id')
        .unsigned()
        .references('punto_de_fusion_id')
        .inTable('elementos')
      table.float('celsius')
      table.float('farenheit')
      table.float('kelvin')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
