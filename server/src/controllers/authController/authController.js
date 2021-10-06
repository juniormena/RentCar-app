const { empleadosService } = require("../../services");
const {
  HTTP: { StatusCode },
} = require("../../enums");
const { getResponse } = require("../../utils/helpers");

const PASSWORD = "@123456";

const getEmpleadoForLogin = async (req, res) => {
  const { emp_cedula, emp_password } = req.params;
  try {
    const empleados = await empleadosService.getEmpleadoByCedula(emp_cedula);
    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          null,
          empleados.rowCount > 0 && emp_password === PASSWORD,
          empleados.rows
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

module.exports = {
  getEmpleadoForLogin,
};
