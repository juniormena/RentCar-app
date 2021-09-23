const { inspeccionService } = require("../../services");
const {
  HTTP: { StatusCode },
} = require("../../enums");
const { getResponse, successMessage, isEmpty } = require("../../utils/helpers");
const { ACTIONS } = require("../../enums/http");

const getAllinspecciones = async (req, res) => {
  try {
    const inspecciones = await inspeccionService.getAllinspecciones();
    res.status(StatusCode.Ok).json(getResponse(null, true, inspecciones.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const getInspeccionById = async (req, res) => {
  const { ins_id_transaccion } = req.params;
  try {
    const inspecciones = await inspeccionService.getInspeccionById(
      ins_id_transaccion
    );
    res
      .status(StatusCode.Ok)
      .json(getResponse(null, inspecciones.rowCount > 0, inspecciones.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const createInspeccion = async (req, res) => {
  const inspeccion = req.body;
  try {
    const inspeccionCreated = await inspeccionService.createInspeccion(
      inspeccion
    );
    res
      .status(StatusCode.Created)
      .json(
        getResponse(
          successMessage(`Inspeccion`, ACTIONS.created),
          inspeccionCreated.success,
          inspeccionCreated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const updateInspeccion = async (req, res) => {
  const inspeccion = req.body;
  try {
    const inspeccionUpdated = await inspeccionService.updateInspeccion(
      inspeccion
    );
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(`Inspeccion`, ACTIONS.updated),
          inspeccionUpdated.success,
          inspeccionUpdated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const disableInspeccion = async (req, res) => {
  const inspeccion = req.body;
  try {
    const inspeccionDisabled = await inspeccionService.disableInspeccion(
      inspeccion
    );
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(`Inspeccion`, ACTIONS.deleted),
          inspeccionDisabled.success,
          inspeccionDisabled.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

module.exports = {
  getAllinspecciones,
  getInspeccionById,
  createInspeccion,
  updateInspeccion,
  disableInspeccion,
};
