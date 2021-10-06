const { empleadosService } = require("../../services");
const {
  HTTP: { StatusCode },
} = require("../../enums");
const { getResponse } = require("../../utils/helpers");

const PASSWORD = "@123456";

const getEmpleadoForLogin = async (req, res) => {
  const { emp_cedula, emp_password } = req.body;

  try {
    const empleados = await empleadosService.getEmpleadoByCedula(emp_cedula);
    const success = empleados.rowCount > 0 && emp_password === PASSWORD;

    res
      .status(StatusCode.Ok)
      .json(
        getResponse(
          success ? null : "Cedula o passoword incorrecto",
          success,
          success ? empleados.rows : []
        )
      );
  } catch (error) {
    res.status(StatusCode.BadRequest).json(getResponse(error.message, false));
  }
};

module.exports = {
  getEmpleadoForLogin,
};
