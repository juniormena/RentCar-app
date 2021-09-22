const { tipoVehiculoController } = require("../controllers");
const commonRouter = require("./commonRouter");

commonRouter.get("/tipoVehiculo", tipoVehiculoController.getAllTipoVehiculo);
commonRouter.get(
  "/tipoVehiculo/:tv_id",
  tipoVehiculoController.getTipoVehiculoById
);
commonRouter.post(
  "/createTipoVehiculo",
  tipoVehiculoController.createTipoVehiculo
);
commonRouter.put(
  "/updateTipoVehiculo",
  tipoVehiculoController.updateTipoVehiculo
);
commonRouter.put(
  "/disableTipoVehiculo",
  tipoVehiculoController.disableTipoVehiculo
);

module.exports = commonRouter;
