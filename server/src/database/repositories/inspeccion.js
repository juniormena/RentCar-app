const { inspeccionQueries } = require("../queries");
const { execQuery } = require("../connectionDB");

const getInspecciones = async () => {
  try {
    const inspecciones = await execQuery(inspeccionQueries.selectAll);
    return inspecciones;
  } catch (error) {
    console.error("Error inspecciones Repository", error);
    throw error;
  }
};

const getInspeccionById = async (ins_id_transaccion) => {
  try {
    const inspecciones = await execQuery(inspeccionQueries.selectOne, [
      ins_id_transaccion,
    ]);
    return inspecciones;
  } catch (error) {
    console.error("Error inspecciones Repository", error);
    throw error;
  }
};

const insertInspeccion = async ({
  ins_id_vehiculo,
  ins_id_cliente,
  ins_tiene_ralladuras,
  ins_cant_combustible,
  ins_tiene_goma_respuesta,
  ins_tiene_gato,
  ins_tiene_roturas_cristal,
  ins_fecha_inspeccion,
  ins_id_empleado,
}) => {
  try {
    const inspecciones = await execQuery(inspeccionQueries.insert, [
      ins_id_vehiculo,
      ins_id_cliente,
      ins_tiene_ralladuras,
      ins_cant_combustible,
      ins_tiene_goma_respuesta,
      ins_tiene_gato,
      ins_tiene_roturas_cristal,
      ins_fecha_inspeccion,
      ins_id_empleado,
    ]);
    return { success: inspecciones.rowCount > 0, data: inspecciones.rows };
  } catch (error) {
    console.error("Error inspecciones Repository", error);
    throw error;
  }
};

const updateInspeccion = async ({
  ins_id_transaccion,
  ins_id_vehiculo,
  ins_id_cliente,
  ins_tiene_ralladuras,
  ins_cant_combustible,
  ins_tiene_goma_respuesta,
  ins_tiene_gato,
  ins_tiene_roturas_cristal,
  ins_fecha_inspeccion,
  ins_id_empleado,
}) => {
  try {
    const inspecciones = await execQuery(inspeccionQueries.update, [
      ins_id_transaccion,
      ins_id_vehiculo,
      ins_id_cliente,
      ins_tiene_ralladuras,
      ins_cant_combustible,
      ins_tiene_goma_respuesta,
      ins_tiene_gato,
      ins_tiene_roturas_cristal,
      ins_fecha_inspeccion,
      ins_id_empleado,
    ]);
    return { success: inspecciones.rowCount > 0, data: inspecciones.rows };
  } catch (error) {
    console.error("Error inspecciones Repository", error);
    throw error;
  }
};

const disableInspeccion = async ({ ins_id_transaccion }) => {
  try {
    const inspecciones = await execQuery(inspeccionQueries.disable, [
      ins_id_transaccion,
    ]);
    return { success: inspecciones.rowCount > 0, data: inspecciones.rows };
  } catch (error) {
    console.error("Error inspecciones Repository", error);
    throw error;
  }
};

module.exports = {
  getInspecciones,
  getInspeccionById,
  insertInspeccion,
  updateInspeccion,
  disableInspeccion,
};
