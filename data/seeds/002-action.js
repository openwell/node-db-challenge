exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          action_description: "Interviewing of students02",
          action_note: "Monday 15 students",
          action_status: 0,
          project_id: 1
        }
      ]);
    });
};
