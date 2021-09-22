const { repository } = require("../../database");
const { tipoVehiculo: tipoVehiculoRepository } = repository;

const getAllTipoVehiculo = async () => {
  try {
    const tipoVehiculo = await tipoVehiculoRepository.getTipoVehiculos();
    return tipoVehiculo;
  } catch (error) {
    throw error;
  }
};

const getTipoVehiculoById = async (tv_id) => {
  try {
    const tipoVehiculo = await tipoVehiculoRepository.getTipoVehiculoById(
      tv_id
    );
    return tipoVehiculo;
  } catch (error) {
    throw error;
  }
};

const createTipoVehiculo = async (tipoVehiculo) => {
  try {
    const newTipoVehiculo = await tipoVehiculoRepository.insertTipoVehiculo(
      tipoVehiculo
    );
    return newTipoVehiculo;
  } catch (error) {
    throw error;
  }
};

const updateTipoVehiculo = async (tipoVehiculo) => {
  try {
    const updatedTipoVehiculo = await tipoVehiculoRepository.updateTipoVehiculo(
      tipoVehiculo
    );
    return updatedTipoVehiculo;
  } catch (error) {
    throw error;
  }
};

const disableTipoVehiculo = async (tipoVehiculo) => {
  try {
    const disabledTipoVehiculo =
      await tipoVehiculoRepository.disableTipoVehiculo(tipoVehiculo);
    return disabledTipoVehiculo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTipoVehiculo,
  getTipoVehiculoById,
  createTipoVehiculo,
  updateTipoVehiculo,
  disableTipoVehiculo,
};
