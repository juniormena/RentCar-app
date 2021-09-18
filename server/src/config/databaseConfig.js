const databaseConfig = {
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  min: 50,
  max: 300,
  idleTimeoutMillis: 30000,
  conIdle: 3000,
};

module.exports = databaseConfig;
