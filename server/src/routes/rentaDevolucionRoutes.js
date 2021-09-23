const { rentaDevolucionController } = require("../controllers");
const commonRouter = require("./commonRouter");

commonRouter.get(
  "/rentaDevolucion",
  rentaDevolucionController.getAllRentaDevoluciones
);
commonRouter.get(
  "/rentaDevolucion/:rdv_id_renta",
  rentaDevolucionController.getRentaDevolucionById
);
commonRouter.post(
  "/createRentaDevolucion",
  rentaDevolucionController.createRentaDevolucion
);
commonRouter.put(
  "/updateRentaDevolucion",
  rentaDevolucionController.updateRentaDevolucion
);
commonRouter.put(
  "/disableRentaDevolucion",
  rentaDevolucionController.disableRentaDevolucion
);

module.exports = commonRouter;
