import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'elementos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nombre_del_elemento_quimico')
      table.json('imagen_del_elemento_quimico')
      table.increments('estados_fisicos_del_elemento_id').primary()
      table.increments('punto_de_fusion_id').primary()
      table.increments('punto_de_ebullicion_id').primary()
      table.float('peso_atomico')
      table.integer('niveles_de_energia', 1)
      table.float('electronegatividad')
      table.json('punto_de_ebullicion')
      table.json('afinidad_electronica')
      table.json('energia_de_ionizacion')
      table.json('radio')
      table.json('dureza')
      table.json('modulo')
      table.json('densidad')
      table.json('conductividad')
      table.json('calor')
      table.json('abundancia')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
