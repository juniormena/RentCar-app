const { modelosService } = require("../../services");
const {
  HTTP: { StatusCode },
} = require("../../enums");
const { getResponse, successMessage, isEmpty } = require("../../utils/helpers");
const { ACTIONS } = require("../../enums/http");

const getAllModelos = async (req, res) => {
  try {
    const modelos = await modelosService.getAllModelos();
    res.status(StatusCode.Ok).json(getResponse(null, true, modelos.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const getModeloById = async (req, res) => {
  const { mo_id } = req.params;
  try {
    const modelos = await modelosService.getModelosById(mo_id);
    res
      .status(StatusCode.Ok)
      .json(getResponse(null, modelos.rowCount > 0, modelos.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const getModeloByMarca = async (req, res) => {
  const { mo_id_marca } = req.params;
  try {
    const modelos = await modelosService.getModelosByMarca(mo_id_marca);
    res
      .status(StatusCode.Ok)
      .json(getResponse(null, modelos.rowCount > 0, modelos.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const createModelo = async (req, res) => {
  const modelo = req.body;
  try {
    isEmpty(modelo.mo_descripcion);
    const modeloCreated = await modelosService.createModelo(modelo);
    res
      .status(StatusCode.Created)
      .json(
        getResponse(
          successMessage(
            `Modelo ${modeloCreated.mo_descripcion}`,
            ACTIONS.created
          ),
          modeloCreated.success,
          modeloCreated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const updateModelo = async (req, res) => {
  const modelo = req.body;
  try {
    isEmpty(modelo.mo_descripcion);
    const modeloUpdated = await modelosService.updateModelo(modelo);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(
            `Modelo ${modeloUpdated.mo_descripcion}`,
            ACTIONS.updated
          ),
          modeloUpdated.success,
          modeloUpdated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const disableModelo = async (req, res) => {
  const modelo = req.body;
  try {
    const modeloDisabled = await modelosService.disableModelo(modelo);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(`Modelo`, ACTIONS.deleted),
          modeloDisabled.success,
          modeloDisabled.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

module.exports = {
  getAllModelos,
  getModeloById,
  getModeloByMarca,
  createModelo,
  updateModelo,
  disableModelo,
};
