const { repository } = require("../../database");
const { modelos: modelosRepository } = repository;

const getAllModelos = async () => {
  try {
    const modelos = await modelosRepository.getModelos();
    return modelos;
  } catch (error) {
    throw error;
  }
};

const getModelosById = async (mo_id) => {
  try {
    const modelos = await modelosRepository.getModeloById(mo_id);
    return modelos;
  } catch (error) {
    throw error;
  }
};

const getModelosByMarca = async (mo_id_marca) => {
  try {
    const modelos = await modelosRepository.getModeloByMarca(mo_id_marca);
    return modelos;
  } catch (error) {
    throw error;
  }
};

const createModelo = async (modelo) => {
  try {
    const newModelo = await modelosRepository.insertModelo(modelo);
    return newModelo;
  } catch (error) {
    throw error;
  }
};

const updateModelo = async (modelo) => {
  try {
    const updatedModelo = await modelosRepository.updateModelo(modelo);
    return updatedModelo;
  } catch (error) {
    throw error;
  }
};

const disableModelo = async (modelo) => {
  try {
    const disabledModelo = await modelosRepository.disableModelo(modelo);
    return disabledModelo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllModelos,
  getModelosById,
  getModelosByMarca,
  createModelo,
  updateModelo,
  disableModelo,
};
