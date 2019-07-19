exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_description: "The work is 30% done",
          project_name: "Lambda School with Andela",
          project_status: 0
        }
      ]);
    });
};
