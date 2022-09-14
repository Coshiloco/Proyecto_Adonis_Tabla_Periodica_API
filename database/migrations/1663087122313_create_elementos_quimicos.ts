import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'elementos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nombre_del_elemento_quimico')
      table.increments('imagen_del_elemento_quimico').primary()
      table.increments('estados_fisicos_del_elemento_id').primary()
      table.increments('punto_de_fusion_id').primary()
      table.increments('punto_de_ebullicion_id').primary()
      table.increments('afinidad_electronica_id').primary()
      table.increments('energia_de_ionizacion_id').primary()
      table.increments('radio').primary()
      table.increments('dureza').primary()
      table.increments('modulo').primary()
      table.increments('densidad').primary()
      table.increments('conductividad').primary()
      table.increments('calor').primary()
      table.increments('abundancia').primary()
      table.float('peso_atomico')
      table.integer('niveles_de_energia', 1)
      table.float('electronegatividad')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
