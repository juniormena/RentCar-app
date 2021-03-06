const marcasService = require("./marcas/marcasService");
const tipoVehiculoService = require("./tipoVehiculo/tipoVehiculoService");
const tipoCombustibleService = require("./tipoCombustible/tipoCombustibleService");
const modelosService = require("./modelos/modelosService");
const vehiculosService = require("./vehiculos/vehiculosService");
const clientesService = require("./clientes/clientesService");
const empleadosService = require("./empleados/empleadosService");
const inspeccionService = require("./inspeccion/inspeccionService");
const rentaDevolucionService = require("./rentaDevolucion/rentaDevolucionService");

module.exports = {
  marcasService,
  tipoVehiculoService,
  tipoCombustibleService,
  modelosService,
  vehiculosService,
  clientesService,
  empleadosService,
  inspeccionService,
  rentaDevolucionService,
};
