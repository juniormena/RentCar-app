const { rentaDevolucionQueries } = require("../queries");
const { execQuery } = require("../connectionDB");

const getRentaDevoluciones = async () => {
  try {
    const rentaDevoluciones = await execQuery(rentaDevolucionQueries.selectAll);
    return rentaDevoluciones;
  } catch (error) {
    console.error("Error rentaDevoluciones Repository", error);
    throw error;
  }
};

const getRentaDevolucionById = async (rdv_id_renta) => {
  try {
    const rentaDevoluciones = await execQuery(
      rentaDevolucionQueries.selectOne,
      [rdv_id_renta]
    );
    return rentaDevoluciones;
  } catch (error) {
    console.error("Error rentaDevoluciones Repository", error);
    throw error;
  }
};

const insertRentaDevolucion = async ({
  rdv_id_empleado,
  rdv_id_vehiculo,
  rdv_id_cliente,
  rdv_fecha_renta,
  rdv_fecha_devolucion,
  rdv_monto_dia,
  rdv_cant_dias,
  rdv_comentario,
}) => {
  try {
    const rentaDevoluciones = await execQuery(rentaDevolucionQueries.insert, [
      rdv_id_empleado,
      rdv_id_vehiculo,
      rdv_id_cliente,
      rdv_fecha_renta,
      rdv_fecha_devolucion,
      rdv_monto_dia,
      rdv_cant_dias,
      rdv_comentario,
    ]);
    return {
      success: rentaDevoluciones.rowCount > 0,
      data: rentaDevoluciones.rows,
    };
  } catch (error) {
    console.error("Error rentaDevoluciones Repository", error);
    throw error;
  }
};

const updateRentaDevolucion = async ({
  rdv_id_renta,
  rdv_id_empleado,
  rdv_id_vehiculo,
  rdv_id_cliente,
  rdv_fecha_renta,
  rdv_fecha_devolucion,
  rdv_monto_dia,
  rdv_cant_dias,
  rdv_comentario,
  rdv_estado,
}) => {
  try {
    const rentaDevoluciones = await execQuery(rentaDevolucionQueries.update, [
      rdv_id_renta,
      rdv_id_empleado,
      rdv_id_vehiculo,
      rdv_id_cliente,
      rdv_fecha_renta,
      rdv_fecha_devolucion,
      rdv_monto_dia,
      rdv_cant_dias,
      rdv_comentario,
      rdv_estado,
    ]);
    return {
      success: rentaDevoluciones.rowCount > 0,
      data: rentaDevoluciones.rows,
    };
  } catch (error) {
    console.error("Error rentaDevoluciones Repository", error);
    throw error;
  }
};

const disableRentaDevolucion = async ({ rdv_id_renta }) => {
  try {
    const rentaDevoluciones = await execQuery(rentaDevolucionQueries.disable, [
      rdv_id_renta,
    ]);
    return {
      success: rentaDevoluciones.rowCount > 0,
      data: rentaDevoluciones.rows,
    };
  } catch (error) {
    console.error("Error rentaDevoluciones Repository", error);
    throw error;
  }
};

module.exports = {
  getRentaDevoluciones,
  getRentaDevolucionById,
  insertRentaDevolucion,
  updateRentaDevolucion,
  disableRentaDevolucion,
};
