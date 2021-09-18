const dotEnv = require("dotenv");

dotEnv.config();

const databaseConfig = require("./databaseConfig");
const serverConfig = require("./serverConfig");

module.exports = { databaseConfig, serverConfig };
