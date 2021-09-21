const { marcasQueries } = require("../queries");
const { execQuery } = require("../connectionDB");

const getMarcas = async () => {
  try {
    const marcas = await execQuery(marcasQueries.selectAll);
    return marcas;
  } catch (error) {
    console.error("Error marcas Repository", error);
    throw error;
  }
};

const getMarcaById = async (ma_id) => {
  try {
    const marcas = await execQuery(marcasQueries.selectOne, [ma_id]);
    return marcas;
  } catch (error) {
    console.error("Error marcas Repository", error);
    throw error;
  }
};

const insertMarca = async ({ ma_descripcion }) => {
  try {
    const marcas = await execQuery(marcasQueries.insert, [ma_descripcion]);
    return { success: marcas.rowCount > 0, ma_descripcion, data: marcas.rows };
  } catch (error) {
    console.error("Error marcas Repository", error);
    throw error;
  }
};

const updateMarca = async ({ ma_id, ma_descripcion }) => {
  try {
    const marcas = await execQuery(marcasQueries.update, [
      ma_id,
      ma_descripcion,
    ]);
    return { success: marcas.rowCount > 0, ma_descripcion, data: marcas.rows };
  } catch (error) {
    console.error("Error marcas Repository", error);
    throw error;
  }
};

const disableMarca = async ({ ma_id }) => {
  try {
    const marcas = await execQuery(marcasQueries.disable, [ma_id]);
    return { success: marcas.rowCount > 0, data: marcas.rows };
  } catch (error) {
    console.error("Error marcas Repository", error);
    throw error;
  }
};

module.exports = {
  getMarcas,
  getMarcaById,
  insertMarca,
  updateMarca,
  disableMarca,
};
