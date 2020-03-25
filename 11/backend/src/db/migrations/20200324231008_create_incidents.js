
exports.up = function(knex) {
    return knex.schema.createTable('incidents',  (t) =>{
        t.increments();
        t.string('ong_id').notNullable();
        t.string('title').notNullable();
        t.string('description').notNullable();
        t.decimal('value').notNullable();
        t.foreign('ong_id').references('id').inTable('ongs');
    });
        
};

exports.down = function(knex) {
    return  knex.schema.dropTable('incidents');
};
