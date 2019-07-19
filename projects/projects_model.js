const db = require("../data/dbConfig");

module.exports = {
  getProject
};

function getProject() {
  return db("projects");
}
