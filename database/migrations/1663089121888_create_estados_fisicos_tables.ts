import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'estadosfisicos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('elmento_quimico_id')
        .unsigned()
        .references('estados_fisicos_del_elemento_id')
        .inTable('elementos')
      table.integer('temperatura_maxima')
      table.integer('temperatura_minima')
      table.string('estado_fisico')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
