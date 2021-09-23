const { empleadosQueries } = require("../queries");
const { execQuery } = require("../connectionDB");

const getEmpleados = async () => {
  try {
    const empleados = await execQuery(empleadosQueries.selectAll);
    return empleados;
  } catch (error) {
    console.error("Error empleados Repository", error);
    throw error;
  }
};

const getEmpleadoById = async (emp_id) => {
  try {
    const empleados = await execQuery(empleadosQueries.selectOne, [emp_id]);
    return empleados;
  } catch (error) {
    console.error("Error empleados Repository", error);
    throw error;
  }
};

const insertEmpleado = async ({
  emp_nombre,
  emp_cedula,
  emp_tanda_labor,
  emp_porciento_comision,
  emp_fecha_ingreso,
}) => {
  try {
    const empleadoss = await execQuery(empleadosQueries.insert, [
      emp_nombre,
      emp_cedula,
      emp_tanda_labor,
      emp_porciento_comision,
      emp_fecha_ingreso,
    ]);
    return {
      success: empleadoss.rowCount > 0,
      emp_nombre,
      empleados: empleadoss.rows,
    };
  } catch (error) {
    console.error("Error empleados Repository", error);
    throw error;
  }
};

const updateEmpleado = async ({
  emp_id,
  emp_nombre,
  emp_cedula,
  emp_tanda_labor,
  emp_porciento_comision,
}) => {
  try {
    const empleados = await execQuery(empleadosQueries.update, [
      emp_id,
      emp_nombre,
      emp_cedula,
      emp_tanda_labor,
      emp_porciento_comision,
    ]);
    return {
      success: empleados.rowCount > 0,
      emp_nombre,
      data: empleados.rows,
    };
  } catch (error) {
    console.error("Error empleados Repository", error);
    throw error;
  }
};

const disableEmpleado = async ({ emp_id }) => {
  try {
    const empleados = await execQuery(empleadosQueries.disable, [emp_id]);
    return { success: empleados.rowCount > 0, data: empleados.rows };
  } catch (error) {
    console.error("Error empleados Repository", error);
    throw error;
  }
};

module.exports = {
  getEmpleados,
  getEmpleadoById,
  insertEmpleado,
  updateEmpleado,
  disableEmpleado,
};
