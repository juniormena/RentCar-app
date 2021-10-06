const { authController } = require("../controllers");
const commonRouter = require("./commonRouter");

commonRouter.post("/login", authController.getEmpleadoForLogin);

module.exports = commonRouter;
