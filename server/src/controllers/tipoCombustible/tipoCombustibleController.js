const { tipoCombustibleService } = require("../../services");
const {
  HTTP: { StatusCode },
} = require("../../enums");
const { getResponse, successMessage, isEmpty } = require("../../utils/helpers");
const { ACTIONS } = require("../../enums/http");

const getAllTipoCombustible = async (req, res) => {
  try {
    const tipoCombustible =
      await tipoCombustibleService.getAllTipoCombustible();
    res
      .status(StatusCode.Ok)
      .json(getResponse(null, true, tipoCombustible.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const getTipoCombustibleById = async (req, res) => {
  const { tc_id } = req.params;
  try {
    const tipoCombustible = await tipoCombustibleService.getTipoCombustibleById(
      tc_id
    );
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(null, tipoCombustible.rowCount > 0, tipoCombustible.rows)
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const createTipoCombustible = async (req, res) => {
  const tipoCombustible = req.body;
  try {
    isEmpty(tipoCombustible.tc_descripcion);
    const tipoCombustibleCreated =
      await tipoCombustibleService.createTipoCombustible(tipoCombustible);
    res
      .status(StatusCode.Created)
      .json(
        getResponse(
          successMessage(
            `Tipo combustible ${tipoCombustibleCreated.tc_descripcion}`,
            ACTIONS.created
          ),
          tipoCombustibleCreated.success,
          tipoCombustibleCreated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const updateTipoCombustible = async (req, res) => {
  const tipoCombustible = req.body;
  try {
    isEmpty(tipoCombustible.tc_descripcion);
    const tipoCombustibleUpdated =
      await tipoCombustibleService.updateTipoCombustible(tipoCombustible);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(
            `Tipo combustible ${tipoCombustibleUpdated.tc_descripcion}`,
            ACTIONS.updated
          ),
          tipoCombustibleUpdated.success,
          tipoCombustibleUpdated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const disableTipoCombustible = async (req, res) => {
  const tipoCombustible = req.body;
  try {
    const tipoCombustibleUpdated =
      await tipoCombustibleService.disableTipoCombustible(tipoCombustible);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(`Tipo combustible`, ACTIONS.deleted),
          tipoCombustibleUpdated.success,
          tipoCombustibleUpdated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

module.exports = {
  getAllTipoCombustible,
  getTipoCombustibleById,
  createTipoCombustible,
  updateTipoCombustible,
  disableTipoCombustible,
};
