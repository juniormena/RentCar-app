const { vehiculosService } = require("../../services");
const {
  HTTP: { StatusCode },
} = require("../../enums");
const { getResponse, successMessage, isEmpty } = require("../../utils/helpers");
const { ACTIONS } = require("../../enums/http");

const getAllVehiculos = async (req, res) => {
  try {
    const vehiculos = await vehiculosService.getAllVehiculos();
    res.status(StatusCode.Ok).json(getResponse(null, true, vehiculos.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const getVehiculoById = async (req, res) => {
  const { v_id } = req.params;
  try {
    const vehiculos = await vehiculosService.getVehiculoById(v_id);
    res
      .status(StatusCode.Ok)
      .json(getResponse(null, vehiculos.rowCount > 0, vehiculos.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const createVehiculo = async (req, res) => {
  const vehiculo = req.body;
  try {
    const vehiculoCreated = await vehiculosService.createVehiculo(vehiculo);
    res
      .status(StatusCode.Created)
      .json(
        getResponse(
          successMessage(
            `Vehiculo ${vehiculoCreated.v_descripcion}`,
            ACTIONS.created
          ),
          vehiculoCreated.success,
          vehiculoCreated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const updateVehiculo = async (req, res) => {
  const vehiculo = req.body;
  try {
    const vehiculoUpdated = await vehiculosService.updateVehiculo(vehiculo);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(
            `Vehiculo ${vehiculoUpdated.v_descripcion}`,
            ACTIONS.updated
          ),
          vehiculoUpdated.success,
          vehiculoUpdated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const disableVehiculo = async (req, res) => {
  const vehiculo = req.body;
  try {
    const vehiculoDisabled = await vehiculosService.disableVehiculo(vehiculo);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(`Vehiculo`, ACTIONS.deleted),
          vehiculoDisabled.success,
          vehiculoDisabled.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

module.exports = {
  getAllVehiculos,
  getVehiculoById,
  createVehiculo,
  updateVehiculo,
  disableVehiculo,
};
