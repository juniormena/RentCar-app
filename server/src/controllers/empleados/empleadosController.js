const { empleadosService } = require("../../services");
const {
  HTTP: { StatusCode },
} = require("../../enums");
const { getResponse, successMessage, isEmpty } = require("../../utils/helpers");
const { ACTIONS } = require("../../enums/http");

const getAllEmpleados = async (req, res) => {
  try {
    const empleados = await empleadosService.getAllEmpleados();
    res.status(StatusCode.Ok).json(getResponse(null, true, empleados.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const getEmpleadoById = async (req, res) => {
  const { emp_id } = req.params;
  try {
    const empleados = await empleadosService.getEmpleadoById(emp_id);
    res
      .status(StatusCode.Ok)
      .json(getResponse(null, empleados.rowCount > 0, empleados.rows));
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const createEmpleado = async (req, res) => {
  const empleado = req.body;
  try {
    const empleadoCreated = await empleadosService.createEmpleado(empleado);
    res
      .status(StatusCode.Created)
      .json(
        getResponse(
          successMessage(
            `Empleado ${empleadoCreated.emp_nombre}`,
            ACTIONS.created
          ),
          empleadoCreated.success,
          empleadoCreated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const updateEmpleado = async (req, res) => {
  const empleado = req.body;
  try {
    const empleadoUpdated = await empleadosService.updateEmpleado(empleado);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(
            `Empleado ${empleadoUpdated.emp_nombre}`,
            ACTIONS.updated
          ),
          empleadoUpdated.success,
          empleadoUpdated.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

const disableEmpleado = async (req, res) => {
  const empleado = req.body;
  try {
    const empleadoDisabled = await empleadosService.disableEmpleado(empleado);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          successMessage(`Empleado`, ACTIONS.deleted),
          empleadoDisabled.success,
          empleadoDisabled.data
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

module.exports = {
  getAllEmpleados,
  getEmpleadoById,
  createEmpleado,
  updateEmpleado,
  disableEmpleado,
};
