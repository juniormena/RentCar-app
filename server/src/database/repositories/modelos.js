const { modelosQueries } = require("../queries");
const { execQuery } = require("../connectionDB");

const getModelos = async () => {
  try {
    const modelos = await execQuery(modelosQueries.selectAll);
    return modelos;
  } catch (error) {
    console.error("Error modelos Repository", error);
    throw error;
  }
};

const getModeloById = async (mo_id) => {
  try {
    const modelos = await execQuery(modelosQueries.selectOne, [mo_id]);
    return modelos;
  } catch (error) {
    console.error("Error modelos Repository", error);
    throw error;
  }
};

const getModeloByMarca = async (mo_id_marca) => {
  try {
    const modelos = await execQuery(modelosQueries.selectByMarca, [
      mo_id_marca,
    ]);
    return modelos;
  } catch (error) {
    console.error("Error modelos Repository", error);
    throw error;
  }
};

const insertModelo = async ({ mo_id_marca, mo_descripcion }) => {
  try {
    const newModelo = await execQuery(modelosQueries.insert, [
      mo_id_marca,
      mo_descripcion,
    ]);
    return {
      success: newModelo.rowCount > 0,
      mo_descripcion,
      data: newModelo.rows,
    };
  } catch (error) {
    console.error("Error modelos Repository", error);
    throw error;
  }
};

const updateModelo = async ({ mo_id, mo_id_marca, mo_descripcion }) => {
  try {
    const modelos = await execQuery(modelosQueries.update, [
      mo_id,
      mo_id_marca,
      mo_descripcion,
    ]);
    return {
      success: modelos.rowCount > 0,
      mo_descripcion,
      data: modelos.rows,
    };
  } catch (error) {
    console.error("Error modelos Repository", error);
    throw error;
  }
};

const disableModelo = async ({ mo_id }) => {
  try {
    const modelos = await execQuery(modelosQueries.disable, [mo_id]);
    return { success: modelos.rowCount > 0, data: modelos.rows };
  } catch (error) {
    console.error("Error modelos Repository", error);
    throw error;
  }
};

module.exports = {
  getModelos,
  getModeloById,
  getModeloByMarca,
  insertModelo,
  updateModelo,
  disableModelo,
};
