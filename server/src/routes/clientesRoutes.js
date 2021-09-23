const { clientesController } = require("../controllers");
const commonRouter = require("./commonRouter");

commonRouter.get("/clientes", clientesController.getAllClientes);
commonRouter.get("/clientes/:c_id", clientesController.getClienteById);
commonRouter.post("/createCliente", clientesController.createCliente);
commonRouter.put("/updateCliente", clientesController.updateCliente);
commonRouter.put("/disableCliente", clientesController.disableCliente);

module.exports = commonRouter;
