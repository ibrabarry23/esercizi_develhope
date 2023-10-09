const pgPromise = require("pg-promise");
const db = pgPromise()("postgres://postgres:postgres@localhost:5432/main");

module.exports = db;
