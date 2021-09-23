const { rentaDevolucionService } = require("../../services");
const {
  HTTP: { StatusCode },
} = require("../../enums");
const { getResponse, successMessage, isEmpty } = require("../../utils/helpers");
const { ACTIONS } = require("../../enums/http");

const getAllRentaDevoluciones = async (req, res) => {
  try {
    const rentaDevolucion =
      await rentaDevolucionService.getAllRentaDevoluciones();
    res
      .status(StatusCode.Ok)
      .json(getResponse(null, true, rentaDevolucion.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const getRentaDevolucionById = async (req, res) => {
  const { rdv_id_renta } = req.params;
  try {
    const rentaDevolucion = await rentaDevolucionService.getRentaDevolucionById(
      rdv_id_renta
    );
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(null, rentaDevolucion.rowCount > 0, rentaDevolucion.rows)
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const createRentaDevolucion = async (req, res) => {
  const rentaDevolucion = req.body;
  try {
    const rentaDevolucionCreated =
      await rentaDevolucionService.createRentaDevolucion(rentaDevolucion);
    res
      .status(StatusCode.Created)
      .json(
        getResponse(
          successMessage(`Renta`, ACTIONS.created),
          rentaDevolucionCreated.success,
          rentaDevolucionCreated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const updateRentaDevolucion = async (req, res) => {
  const rentaDevolucion = req.body;
  try {
    const rentaDevolucionUpdated =
      await rentaDevolucionService.updateRentaDevolucion(rentaDevolucion);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(`Renta`, ACTIONS.updated),
          rentaDevolucionUpdated.success,
          rentaDevolucionUpdated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const disableRentaDevolucion = async (req, res) => {
  const rentaDevolucion = req.body;
  try {
    const rentaDevolucionDisabled =
      await rentaDevolucionService.disableRentaVehiculo(rentaDevolucion);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(`Renta`, ACTIONS.deleted),
          rentaDevolucionDisabled.success,
          rentaDevolucionDisabled.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

module.exports = {
  getAllRentaDevoluciones,
  getRentaDevolucionById,
  createRentaDevolucion,
  updateRentaDevolucion,
  disableRentaDevolucion,
};
