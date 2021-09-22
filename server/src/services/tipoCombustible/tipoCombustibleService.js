const { repository } = require("../../database");
const { tipoCombustible: tipoCombustibleRepository } = repository;

const getAllTipoCombustible = async () => {
  try {
    const tipoCombustible =
      await tipoCombustibleRepository.getTipoCombustible();
    return tipoCombustible;
  } catch (error) {
    throw error;
  }
};

const getTipoCombustibleById = async (tc_id) => {
  try {
    const tipoCombustible =
      await tipoCombustibleRepository.getTipoCombustibleById(tc_id);
    return tipoCombustible;
  } catch (error) {
    throw error;
  }
};

const createTipoCombustible = async (tipoCombustible) => {
  try {
    const newTipoCombustible =
      await tipoCombustibleRepository.insertTipoCombustible(tipoCombustible);
    return newTipoCombustible;
  } catch (error) {
    throw error;
  }
};

const updateTipoCombustible = async (tipoCombustible) => {
  try {
    const updatedTipoCombustible =
      await tipoCombustibleRepository.updateTipoCombustible(tipoCombustible);
    return updatedTipoCombustible;
  } catch (error) {
    throw error;
  }
};

const disableTipoCombustible = async (tipoCombustible) => {
  try {
    const disabledTipoCombustible =
      await tipoCombustibleRepository.disableTipoCombustible(tipoCombustible);
    return disabledTipoCombustible;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTipoCombustible,
  getTipoCombustibleById,
  createTipoCombustible,
  updateTipoCombustible,
  disableTipoCombustible,
};
