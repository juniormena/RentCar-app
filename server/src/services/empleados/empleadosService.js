const { repository } = require("../../database");
const { validateDominicanID } = require("../../utils/helpers");
const { empleados: empleadosRepository } = repository;

const getAllEmpleados = async () => {
  try {
    const empleados = await empleadosRepository.getEmpleados();
    return empleados;
  } catch (error) {
    throw error;
  }
};

const getEmpleadoById = async (emp_id) => {
  try {
    const empleados = await empleadosRepository.getEmpleadoById(emp_id);
    return empleados;
  } catch (error) {
    throw error;
  }
};

const getEmpleadoByCedula = async (emp_cedula) => {
  try {
    const empleados = await empleadosRepository.getEmpleadoByCedula(emp_cedula);
    return empleados;
  } catch (error) {
    throw error;
  }
};

const createEmpleado = async (empleado) => {
  try {
    validateDominicanID(empleado.emp_cedula);
    const newEmpleado = await empleadosRepository.insertEmpleado(empleado);
    return newEmpleado;
  } catch (error) {
    throw error;
  }
};

const updateEmpleado = async (empleado) => {
  try {
    validateDominicanID(empleado.emp_cedula);
    const updatedEmpleado = await empleadosRepository.updateEmpleado(empleado);
    return updatedEmpleado;
  } catch (error) {
    throw error;
  }
};

const disableEmpleado = async (empleado) => {
  try {
    const disabledEmpleado = await empleadosRepository.disableEmpleado(
      empleado
    );
    return disabledEmpleado;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllEmpleados,
  getEmpleadoById,
  getEmpleadoByCedula,
  createEmpleado,
  updateEmpleado,
  disableEmpleado,
};
