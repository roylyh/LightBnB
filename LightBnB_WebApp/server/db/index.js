const { Pool } = require('pg');

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "lightbnb",
});

module.exports = {
  query: (text, params, callback) => {
    const start = Date.now();
    return pool.query(text, params)
      .then((res) => {
        const duration = Date.now() - start;
        console.log("executed query", {text, params, duration, rows:res.rows});
        return callback(res);
      }
      );
  },
};