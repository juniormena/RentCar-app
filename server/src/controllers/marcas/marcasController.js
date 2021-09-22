const { marcasService } = require("../../services");
const {
  HTTP: { StatusCode },
} = require("../../enums");
const { getResponse, successMessage, isEmpty } = require("../../utils/helpers");
const { ACTIONS } = require("../../enums/http");

const getAllMarcas = async (req, res) => {
  try {
    const marcas = await marcasService.getAllMarcas();
    res.status(StatusCode.Ok).json(getResponse(null, true, marcas.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const getMarcaById = async (req, res) => {
  const { ma_id } = req.params;
  try {
    const marcas = await marcasService.getMarcaById(ma_id);
    res
      .status(StatusCode.Ok)
      .json(getResponse(null, marcas.rowCount > 0, marcas.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const createMarca = async (req, res) => {
  const marca = req.body;
  try {
    isEmpty(marca.ma_descripcion);
    const marcaCreated = await marcasService.createMarca(marca);
    res
      .status(StatusCode.Created)
      .json(
        getResponse(
          successMessage(
            `Marca ${marcaCreated.ma_descripcion}`,
            ACTIONS.created
          ),
          marcaCreated.success,
          marcaCreated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const updateMarca = async (req, res) => {
  const marca = req.body;
  try {
    isEmpty(marca.ma_descripcion);
    const marcaUpdated = await marcasService.updateMarca(marca);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(
            `Marca ${marcaUpdated.ma_descripcion}`,
            ACTIONS.updated
          ),
          marcaUpdated.success,
          marcaUpdated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const disableMarca = async (req, res) => {
  const marca = req.body;
  try {
    const marcaDisabled = await marcasService.disableMarca(marca);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(`Marca`, ACTIONS.deleted),
          marcaDisabled.success,
          marcaDisabled.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

module.exports = {
  getAllMarcas,
  getMarcaById,
  createMarca,
  updateMarca,
  disableMarca,
};
