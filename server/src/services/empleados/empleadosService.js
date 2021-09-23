const { repository } = require("../../database");
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

const createEmpleado = async (empleado) => {
  try {
    const newEmpleado = await empleadosRepository.insertEmpleado(empleado);
    return newEmpleado;
  } catch (error) {
    throw error;
  }
};

const updateEmpleado = async (empleado) => {
  try {
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
  createEmpleado,
  updateEmpleado,
  disableEmpleado,
};