const marcasController = require("./marcas/marcasController");
const tipoVehiculoController = require("./tipoVehiculo/tipoVehiculoController");
const tipoCombustibleController = require("./tipoCombustible/tipoCombustibleController");
const modelosController = require("./modelos/modelosController");
const vehiculosController = require("./vehiculos/vehiculosController");
const clientesController = require("./clientes/clientesController");
const empleadosController = require("./empleados/empleadosController");
const inspeccionController = require("./inspecciones/inspeccionesController");
const rentaDevolucionController = require("./rentaDevolucion/rentaDevolucionController");
const authController = require("./authController/authController");

module.exports = {
  marcasController,
  tipoVehiculoController,
  tipoCombustibleController,
  modelosController,
  vehiculosController,
  clientesController,
  empleadosController,
  inspeccionController,
  rentaDevolucionController,
  authController,
};
