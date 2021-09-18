const { Pool } = require("pg");
const {
  databaseConfig: {
    user,
    host,
    database,
    password,
    port,
    min,
    max,
    idleTimeoutMillis,
  },
} = require("../config");

const postgresConnection = new Pool({
  user,
  host,
  database,
  password,
  port,
  min,
  max, // max number of clients in the pool
  idleTimeoutMillis,
});

async function execQuery(query, values = []) {
  const client = await postgresConnection.connect();
  try {
    return await client.query(query, values);
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    client.release();
  }
}

module.exports = { execQuery };
