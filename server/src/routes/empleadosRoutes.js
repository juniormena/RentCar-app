const { empleadosController } = require("../controllers");
const commonRouter = require("./commonRouter");

commonRouter.get("/empleados", empleadosController.getAllEmpleados);
commonRouter.get("/empleados/:emp_id", empleadosController.getEmpleadoById);
commonRouter.post("/createEmpleado", empleadosController.createEmpleado);
commonRouter.put("/updateEmpleado", empleadosController.updateEmpleado);
commonRouter.put("/disableEmpleado", empleadosController.disableEmpleado);

module.exports = commonRouter;
