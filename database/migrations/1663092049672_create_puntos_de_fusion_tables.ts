import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'puntosdefusion'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('punto_de_fusion_en_grados_celsius').unsigned().references('').inTable('')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
