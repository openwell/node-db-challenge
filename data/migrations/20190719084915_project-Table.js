exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .string("project_name", 255)
        .unique()
        .notNullable();
      tbl.string("project_description", 255).notNullable();
      tbl.boolean("project_status").notNullable();
    })
    .createTable("actions", tbl => {
      tbl.increments();
      tbl.string("action_description", 255).notNullable();
      tbl.string("actions_notes", 255).notNullable();
      tbl.boolean("action_status").notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("schemes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects").dropTableIfExists("actions");
};
