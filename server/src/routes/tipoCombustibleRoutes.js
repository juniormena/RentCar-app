const { tipoCombustibleController } = require("../controllers");
const commonRouter = require("./commonRouter");

commonRouter.get(
  "/tipoCombustible",
  tipoCombustibleController.getAllTipoCombustible
);
commonRouter.get(
  "/tipoCombustible/:tc_id",
  tipoCombustibleController.getTipoCombustibleById
);
commonRouter.post(
  "/createTipoCombustible",
  tipoCombustibleController.createTipoCombustible
);
commonRouter.put(
  "/updateTipoCombustible",
  tipoCombustibleController.updateTipoCombustible
);
commonRouter.put(
  "/disableTipoCombustible",
  tipoCombustibleController.disableTipoCombustible
);

module.exports = commonRouter;
