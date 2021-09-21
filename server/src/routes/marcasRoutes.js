const { marcasController } = require("../controllers");
const commonRouter = require("./commonRouter");

commonRouter.get("/marcas", marcasController.getAllMarcas);
commonRouter.get("/marcas/:ma_id", marcasController.getMarcaById);
commonRouter.post("/createMarca", marcasController.createMarca);
commonRouter.put("/updateMarca", marcasController.updateMarca);
commonRouter.put("/disableMarca", marcasController.disableMarca);

module.exports = commonRouter;
