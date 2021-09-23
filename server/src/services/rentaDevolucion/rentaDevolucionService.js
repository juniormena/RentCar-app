const { repository } = require("../../database");
const {
  rentaDevolucion: rentaDevolucionRepository,
  vehiculos: vehiculosRepository,
} = repository;

const getAllRentaDevoluciones = async () => {
  try {
    const rentaDevolucion =
      await rentaDevolucionRepository.getRentaDevoluciones();
    return rentaDevolucion;
  } catch (error) {
    throw error;
  }
};

const getRentaDevolucionById = async (rdv_id_renta) => {
  try {
    const rentaDevolucion =
      await rentaDevolucionRepository.getRentaDevolucionById(rdv_id_renta);
    return rentaDevolucion;
  } catch (error) {
    throw error;
  }
};

const createRentaDevolucion = async (rentaDevolucion) => {
  try {
    const newRentaDevolucion =
      await rentaDevolucionRepository.insertRentaDevolucion(rentaDevolucion);
    let vehiculo = {
      v_id: rentaDevolucion.rdv_id_vehiculo,
      v_estado: rentaDevolucion.rdv_vehiculo_estado,
    };
    await vehiculosRepository.disableVehiculo(vehiculo);
    return newRentaDevolucion;
  } catch (error) {
    throw error;
  }
};

const updateRentaDevolucion = async (rentaDevolucion) => {
  try {
    const updatedrentaDevolucion =
      await rentaDevolucionRepository.updateRentaDevolucion(rentaDevolucion);
    let vehiculo = {
      v_id: rentaDevolucion.rdv_id_vehiculo,
      v_estado: rentaDevolucion.rdv_vehiculo_estado,
    };
    await vehiculosRepository.disableVehiculo(vehiculo);
    return updatedrentaDevolucion;
  } catch (error) {
    throw error;
  }
};

const disableRentaVehiculo = async (rentaDevolucion) => {
  try {
    const disabledrentaDevolucion =
      await rentaDevolucionRepository.disableRentaDevolucion(rentaDevolucion);
    return disabledrentaDevolucion;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllRentaDevoluciones,
  getRentaDevolucionById,
  createRentaDevolucion,
  updateRentaDevolucion,
  disableRentaVehiculo,
};
