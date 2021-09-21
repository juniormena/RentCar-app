const { repository } = require("../../database");
const { marcas: marcasRepository } = repository;

const getAllMarcas = async () => {
  try {
    const marcas = await marcasRepository.getMarcas();
    return marcas;
  } catch (error) {
    throw error;
  }
};

const getMarcaById = async (ma_id) => {
  try {
    const marcas = await marcasRepository.getMarcaById(ma_id);
    return marcas;
  } catch (error) {
    throw error;
  }
};

const createMarca = async (marca) => {
  try {
    const newMarca = await marcasRepository.insertMarca(marca);
    return newMarca;
  } catch (error) {
    throw error;
  }
};

const updateMarca = async (marca) => {
  try {
    const updatedMarca = await marcasRepository.updateMarca(marca);
    return updatedMarca;
  } catch (error) {
    throw error;
  }
};

const disableMarca = async (marca) => {
  try {
    const disabledMarca = await marcasRepository.disableMarca(marca);
    return disabledMarca;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllMarcas,
  getMarcaById,
  createMarca,
  updateMarca,
  disableMarca,
};
