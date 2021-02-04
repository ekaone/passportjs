// import low from 'lowdb'
// import FileSync from 'lowdb/adapters/FileSync'
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

// Write Todos as default
db.defaults({ users: [] }).write();

// export default db;
module.exports = db;
