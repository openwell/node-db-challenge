const db = require("../data/dbConfig");

module.exports = {
  getProject
};

function getProject() {
  return db("projects").then(data => {
    data.map(elem => (elem.project_status = !!elem.project_status));
    return data;
  });
}
