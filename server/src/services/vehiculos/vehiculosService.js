const { repository } = require("../../database");
const { vehiculos: vehiculosRepository } = repository;

const getAllVehiculos = async () => {
  try {
    const vehiculos = await vehiculosRepository.getVehiculos();
    return vehiculos;
  } catch (error) {
    throw error;
  }
};

const getVehiculoById = async (tv_id) => {
  try {
    const vehiculos = await vehiculosRepository.getVehiculoById(tv_id);
    return vehiculos;
  } catch (error) {
    throw error;
  }
};

const createVehiculo = async (vehiculo) => {
  try {
    const newVehiculo = await vehiculosRepository.insertVehiculo(vehiculo);
    return newVehiculo;
  } catch (error) {
    throw error;
  }
};

const updateVehiculo = async (vehiculo) => {
  try {
    const updatedVehiculo = await vehiculosRepository.updateVehiculo(vehiculo);
    return updatedVehiculo;
  } catch (error) {
    throw error;
  }
};

const disableVehiculo = async (vehiculo) => {
  try {
    const disabledVehiculo = await vehiculosRepository.disableVehiculo(
      vehiculo
    );
    return disabledVehiculo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllVehiculos,
  getVehiculoById,
  createVehiculo,
  updateVehiculo,
  disableVehiculo,
};
