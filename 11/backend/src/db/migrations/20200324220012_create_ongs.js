
exports.up = function(knex) {
   return knex.schema.createTable('ongs',  (t) =>{
    t.increments('id').primary();
    t.string('name').notNullable();
    t.string('mail').notNullable();
    t.string('whatsapp').notNullable();
    t.string('city').notNullable();
    t.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
  return  knex.schema.dropTable('ongs');
};
