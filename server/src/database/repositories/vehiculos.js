const { vehiculosQueries } = require("../queries");
const { execQuery } = require("../connectionDB");

const getVehiculos = async () => {
  try {
    const vehiculos = await execQuery(vehiculosQueries.selectAll);
    return vehiculos;
  } catch (error) {
    console.error("Error vehiculos Repository", error);
    throw error;
  }
};

const getVehiculoById = async (v_id) => {
  try {
    const vehiculos = await execQuery(vehiculosQueries.selectOne, [v_id]);
    return vehiculos;
  } catch (error) {
    console.error("Error vehiculos Repository", error);
    throw error;
  }
};

const insertVehiculo = async ({
  v_descripcion,
  v_chasis,
  v_motor,
  v_place,
  v_id_tipo_vehiculo,
  v_id_marca,
  v_id_modelo,
  v_id_tipo_combustible,
}) => {
  try {
    const vehiculos = await execQuery(vehiculosQueries.insert, [
      v_descripcion,
      v_chasis,
      v_motor,
      v_place,
      v_id_tipo_vehiculo,
      v_id_marca,
      v_id_modelo,
      v_id_tipo_combustible,
    ]);
    return {
      success: vehiculos.rowCount > 0,
      v_descripcion,
      data: vehiculos.rows,
    };
  } catch (error) {
    console.error("Error vehiculos Repository", error);
    throw error;
  }
};

const updateVehiculo = async ({
  v_id,
  v_descripcion,
  v_chasis,
  v_motor,
  v_place,
  v_id_tipo_vehiculo,
  v_id_marca,
  v_id_modelo,
  v_id_tipo_combustible,
}) => {
  try {
    const vehiculos = await execQuery(vehiculosQueries.update, [
      v_id,
      v_descripcion,
      v_chasis,
      v_motor,
      v_place,
      v_id_tipo_vehiculo,
      v_id_marca,
      v_id_modelo,
      v_id_tipo_combustible,
    ]);
    return {
      success: vehiculos.rowCount > 0,
      v_descripcion,
      data: vehiculos.rows,
    };
  } catch (error) {
    console.error("Error vehiculos Repository", error);
    throw error;
  }
};

const disableVehiculo = async ({ v_id }) => {
  try {
    const vehiculos = await execQuery(vehiculosQueries.disable, [v_id]);
    return { success: vehiculos.rowCount > 0, data: vehiculos.rows };
  } catch (error) {
    console.error("Error vehiculos Repository", error);
    throw error;
  }
};

module.exports = {
  getVehiculos,
  getVehiculoById,
  insertVehiculo,
  updateVehiculo,
  disableVehiculo,
};
