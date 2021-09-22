const { tipoVehiculoService } = require("../../services");
const {
  HTTP: { StatusCode },
} = require("../../enums");
const { getResponse, successMessage, isEmpty } = require("../../utils/helpers");
const { ACTIONS } = require("../../enums/http");

const getAllTipoVehiculo = async (req, res) => {
  try {
    const tipoVehiculos = await tipoVehiculoService.getAllTipoVehiculo();
    res.status(StatusCode.Ok).json(getResponse(null, true, tipoVehiculos.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const getTipoVehiculoById = async (req, res) => {
  const { tv_id } = req.params;
  try {
    const tipoVehiculos = await tipoVehiculoService.getTipoVehiculoById(tv_id);
    res
      .status(StatusCode.Ok)
      .json(getResponse(null, tipoVehiculos.rowCount > 0, tipoVehiculos.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const createTipoVehiculo = async (req, res) => {
  const tipoVehiculo = req.body;
  try {
    isEmpty(tipoVehiculo.tv_descripcion);
    const tipoVehiculoCreated = await tipoVehiculoService.createTipoVehiculo(
      tipoVehiculo
    );
    res
      .status(StatusCode.Created)
      .json(
        getResponse(
          successMessage(
            `Tipo vehiculo ${tipoVehiculoCreated.tv_descripcion}`,
            ACTIONS.created
          ),
          tipoVehiculoCreated.success,
          tipoVehiculoCreated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const updateTipoVehiculo = async (req, res) => {
  const tipoVehiculo = req.body;
  try {
    isEmpty(tipoVehiculo.tv_descripcion);
    const tipoVehiculoUpdated = await tipoVehiculoService.updateTipoVehiculo(
      tipoVehiculo
    );
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(
            `Tipo vehiculo ${tipoVehiculoUpdated.tv_descripcion}`,
            ACTIONS.updated
          ),
          tipoVehiculoUpdated.success,
          tipoVehiculoUpdated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const disableTipoVehiculo = async (req, res) => {
  const tipoVehiculo = req.body;
  try {
    const tipoVehiculoDisabled = await tipoVehiculoService.disableTipoVehiculo(
      tipoVehiculo
    );
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(`Tipo vehiculo`, ACTIONS.deleted),
          tipoVehiculoDisabled.success,
          tipoVehiculoDisabled.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

module.exports = {
  getAllTipoVehiculo,
  getTipoVehiculoById,
  createTipoVehiculo,
  updateTipoVehiculo,
  disableTipoVehiculo,
};
