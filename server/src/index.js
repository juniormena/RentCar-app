const express = require("express");
const path = require("path");
const dotEnv = require("dotenv");
const { cors } = require("./middlewares");
const { marcasRoutes } = require("./routes");
const {
  serverConfig: { port },
} = require("./config");

dotEnv.config();

const app = express();
//General Exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
});

//MidleWares
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "50mb" }));
app.use(cors);
//Routers
app.use(marcasRoutes);

//Server Config
app.listen(port, () => console.log(`server running on port ${port}`));
