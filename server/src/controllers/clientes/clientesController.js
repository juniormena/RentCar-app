const { clientesService } = require("../../services");
const {
  HTTP: { StatusCode },
} = require("../../enums");
const { getResponse, successMessage, isEmpty } = require("../../utils/helpers");
const { ACTIONS } = require("../../enums/http");

const getAllClientes = async (req, res) => {
  try {
    const clientes = await clientesService.getAllClientes();
    res.status(StatusCode.Ok).json(getResponse(null, true, clientes.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const getClienteById = async (req, res) => {
  const { c_id } = req.params;
  try {
    const clientes = await clientesService.getClienteById(c_id);
    res
      .status(StatusCode.Ok)
      .json(getResponse(null, clientes.rowCount > 0, clientes.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const createCliente = async (req, res) => {
  const cliente = req.body;
  try {
    const clienteCreated = await clientesService.createCliente(cliente);
    res
      .status(StatusCode.Created)
      .json(
        getResponse(
          successMessage(`Cliente ${clienteCreated.c_nombre}`, ACTIONS.created),
          clienteCreated.success,
          clienteCreated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const updateCliente = async (req, res) => {
  const cliente = req.body;
  try {
    const clienteUpdated = await clientesService.updateCliente(cliente);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(`Cliente ${clienteUpdated.c_nombre}`, ACTIONS.updated),
          clienteUpdated.success,
          clienteUpdated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const disableCliente = async (req, res) => {
  const cliente = req.body;
  try {
    const clienteDisabled = await clientesService.disableCliente(cliente);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(`Cliente`, ACTIONS.deleted),
          clienteDisabled.success,
          clienteDisabled.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

module.exports = {
  getAllClientes,
  getClienteById,
  createCliente,
  updateCliente,
  disableCliente,
};
