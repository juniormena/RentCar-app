const { repository } = require("../../database");
const { inspecciones: inspeccionRepository } = repository;

const getAllinspecciones = async () => {
  try {
    const inspecciones = await inspeccionRepository.getInspecciones();
    return inspecciones;
  } catch (error) {
    throw error;
  }
};

const getInspeccionById = async (ins_id_transaccion) => {
  try {
    const inspecciones = await inspeccionRepository.getInspeccionById(
      ins_id_transaccion
    );
    return inspecciones;
  } catch (error) {
    throw error;
  }
};

const createInspeccion = async (inspeccion) => {
  try {
    const newInspeccion = await inspeccionRepository.insertInspeccion(
      inspeccion
    );
    return newInspeccion;
  } catch (error) {
    throw error;
  }
};

const updateInspeccion = async (inspeccion) => {
  try {
    const updatedInspeccion = await inspeccionRepository.updateInspeccion(
      inspeccion
    );
    return updatedInspeccion;
  } catch (error) {
    throw error;
  }
};

const disableInspeccion = async (inspeccion) => {
  try {
    const disabledInspeccion = await inspeccionRepository.disableInspeccion(
      inspeccion
    );
    return disabledInspeccion;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllinspecciones,
  getInspeccionById,
  createInspeccion,
  updateInspeccion,
  disableInspeccion,
};
