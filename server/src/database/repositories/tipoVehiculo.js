const { tipoVehiculoQueries } = require("../queries");
const { execQuery } = require("../connectionDB");

const getTipoVehiculos = async () => {
  try {
    const tipoVehiculos = await execQuery(tipoVehiculoQueries.selectAll);
    return tipoVehiculos;
  } catch (error) {
    console.error("Error tipoVehiculos Repository", error);
    throw error;
  }
};

const getTipoVehiculoById = async (tv_id) => {
  try {
    const tipoVehiculos = await execQuery(tipoVehiculoQueries.selectOne, [
      tv_id,
    ]);
    return tipoVehiculos;
  } catch (error) {
    console.error("Error tipoVehiculos Repository", error);
    throw error;
  }
};

const insertTipoVehiculo = async ({ tv_descripcion }) => {
  try {
    const tipoVehiculos = await execQuery(tipoVehiculoQueries.insert, [
      tv_descripcion,
    ]);
    return {
      success: tipoVehiculos.rowCount > 0,
      tv_descripcion,
      data: tipoVehiculos.rows,
    };
  } catch (error) {
    console.error("Error tipoVehiculos Repository", error);
    throw error;
  }
};

const updateTipoVehiculo = async ({ tv_id, tv_descripcion }) => {
  try {
    const tipoVehiculos = await execQuery(tipoVehiculoQueries.update, [
      tv_id,
      tv_descripcion,
    ]);
    return {
      success: tipoVehiculos.rowCount > 0,
      tv_descripcion,
      data: tipoVehiculos.rows,
    };
  } catch (error) {
    console.error("Error tipoVehiculos Repository", error);
    throw error;
  }
};

const disableTipoVehiculo = async ({ tv_id }) => {
  try {
    const tipoVehiculos = await execQuery(tipoVehiculoQueries.disable, [tv_id]);
    return { success: tipoVehiculos.rowCount > 0, data: tipoVehiculos.rows };
  } catch (error) {
    console.error("Error tipoVehiculos Repository", error);
    throw error;
  }
};

module.exports = {
  getTipoVehiculos,
  getTipoVehiculoById,
  insertTipoVehiculo,
  updateTipoVehiculo,
  disableTipoVehiculo,
};
