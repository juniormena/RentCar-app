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

module.exports = {
  getAllMarcas,
};
