const { modelosController } = require("../controllers");
const commonRouter = require("./commonRouter");

commonRouter.get("/modelos", modelosController.getAllModelos);
commonRouter.get("/modelos/:mo_id", modelosController.getModeloById);
commonRouter.get(
  "/modelosByMarca/:mo_id_marca",
  modelosController.getModeloByMarca
);
commonRouter.post("/createModelo", modelosController.createModelo);
commonRouter.put("/updateModelo", modelosController.updateModelo);
commonRouter.put("/disableModelo", modelosController.disableModelo);

module.exports = commonRouter;
