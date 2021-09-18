const { marcasService } = require("../../services");
const {
  HTTP: { StatusCode },
} = require("../../enums");

const getResponse = (message, success = true, data = []) => {
  return { message, success, data };
};

const getAllMarcas = async (req, res) => {
  try {
    const marcas = await marcasService.getAllMarcas();
    res.status(StatusCode.Ok).json(getResponse(null, true, marcas.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

module.exports = {
  getAllMarcas,
};
