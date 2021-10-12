const { repository } = require("../../database");
const { validateDominicanID } = require("../../utils/helpers");
const { clientes: clientesRepository } = repository;

const getAllClientes = async () => {
  try {
    const clientes = await clientesRepository.getClientes();
    return clientes;
  } catch (error) {
    throw error;
  }
};

const getClienteById = async (c_id) => {
  try {
    const clientes = await clientesRepository.getClienteById(c_id);
    return clientes;
  } catch (error) {
    throw error;
  }
};

const createCliente = async (cliente) => {
  try {
    validateDominicanID(cliente.c_cedula);
    const newCliente = await clientesRepository.insertCliente(cliente);
    return newCliente;
  } catch (error) {
    throw error;
  }
};

const updateCliente = async (cliente) => {
  try {
    validateDominicanID(cliente.c_cedula);
    const updatedCliente = await clientesRepository.updateCliente(cliente);
    return updatedCliente;
  } catch (error) {
    throw error;
  }
};

const disableCliente = async (cliente) => {
  try {
    const disabledCliente = await clientesRepository.disableCliente(cliente);
    return disabledCliente;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllClientes,
  getClienteById,
  createCliente,
  updateCliente,
  disableCliente,
};
