const { vehiculosController } = require("../controllers");
const commonRouter = require("./commonRouter");

commonRouter.get("/vehiculos", vehiculosController.getAllVehiculos);
commonRouter.get("/vehiculos/:v_id", vehiculosController.getVehiculoById);
commonRouter.post("/createVehiculo", vehiculosController.createVehiculo);
commonRouter.put("/updateVehiculo", vehiculosController.updateVehiculo);
commonRouter.put("/disableVehiculo", vehiculosController.disableVehiculo);

module.exports = commonRouter;
