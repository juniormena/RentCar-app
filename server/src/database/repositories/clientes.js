const { clientesQueries } = require("../queries");
const { execQuery } = require("../connectionDB");

const getClientes = async () => {
  try {
    const clientes = await execQuery(clientesQueries.selectAll);
    return clientes;
  } catch (error) {
    console.error("Error clientes Repository", error);
    throw error;
  }
};

const getClienteById = async (c_id) => {
  try {
    const clientes = await execQuery(clientesQueries.selectOne, [c_id]);
    return clientes;
  } catch (error) {
    console.error("Error clientes Repository", error);
    throw error;
  }
};

const insertCliente = async ({
  c_nombre,
  c_cedula,
  c_tarjeta_cr,
  c_limite_credito,
  c_tipo_persona,
}) => {
  try {
    const clientes = await execQuery(clientesQueries.insert, [
      c_nombre,
      c_cedula,
      c_tarjeta_cr,
      c_limite_credito,
      c_tipo_persona,
    ]);
    return { success: clientes.rowCount > 0, c_nombre, data: clientes.rows };
  } catch (error) {
    console.error("Error clientes Repository", error);
    throw error;
  }
};

const updateCliente = async ({
  c_id,
  c_nombre,
  c_cedula,
  c_tarjeta_cr,
  c_limite_credito,
  c_tipo_persona,
}) => {
  try {
    const clientes = await execQuery(clientesQueries.update, [
      c_id,
      c_nombre,
      c_cedula,
      c_tarjeta_cr,
      c_limite_credito,
      c_tipo_persona,
    ]);
    return { success: clientes.rowCount > 0, c_nombre, data: clientes.rows };
  } catch (error) {
    console.error("Error clientes Repository", error);
    throw error;
  }
};

const disableCliente = async ({ c_id }) => {
  try {
    const clientes = await execQuery(clientesQueries.disable, [c_id]);
    return { success: clientes.rowCount > 0, data: clientes.rows };
  } catch (error) {
    console.error("Error clientes Repository", error);
    throw error;
  }
};

module.exports = {
  getClientes,
  getClienteById,
  insertCliente,
  updateCliente,
  disableCliente,
};
