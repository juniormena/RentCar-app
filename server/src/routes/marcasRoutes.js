const { marcasController } = require("../controllers");
const commonRouter = require("./commonRouter");

commonRouter.get("/marcas", marcasController.getAllMarcas);

module.exports = commonRouter;
