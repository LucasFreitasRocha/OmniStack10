
exports.up = function(knex) {
    return knex.schema.createTable('incidents',  (t) =>{
        t.increments();
        t.integer('id_ongs').notNullable();
        t.string('title').notNullable();
        t.string('description').notNullable();
        t.decimal('value').notNullable();
        t.foreign('id_ongs').references('id').inTable('ongs');
    });
        
};

exports.down = function(knex) {
    return  knex.schema.dropTable('incidents');
};
