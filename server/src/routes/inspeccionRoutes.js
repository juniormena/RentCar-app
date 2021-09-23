const { inspeccionController } = require("../controllers");
const commonRouter = require("./commonRouter");

commonRouter.get("/inspecciones", inspeccionController.getAllinspecciones);
commonRouter.get(
  "/inspecciones/:ins_id_transaccion",
  inspeccionController.getInspeccionById
);
commonRouter.post("/createInspeccion", inspeccionController.createInspeccion);
commonRouter.put("/updateInspeccion", inspeccionController.updateInspeccion);
commonRouter.put("/disableInspeccion", inspeccionController.disableInspeccion);

module.exports = commonRouter;
