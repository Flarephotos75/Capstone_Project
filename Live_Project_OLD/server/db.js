const Pool = require("pg").Pool;

const pool = new Pool({
    user: "Steven",
    password: "",
    host: "localhost",
    port: 5432,
    database: "F1"
});

module.exports = pool;