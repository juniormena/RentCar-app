const { tipoCombustibleQueries } = require("../queries");
const { execQuery } = require("../connectionDB");

const getTipoCombustible = async () => {
  try {
    const tipoCombustible = await execQuery(tipoCombustibleQueries.selectAll);
    return tipoCombustible;
  } catch (error) {
    console.error("Error tipoCombustible Repository", error);
    throw error;
  }
};

const getTipoCombustibleById = async (tc_id) => {
  try {
    const tipoCombustible = await execQuery(tipoCombustibleQueries.selectOne, [
      tc_id,
    ]);
    return tipoCombustible;
  } catch (error) {
    console.error("Error tipoCombustible Repository", error);
    throw error;
  }
};

const insertTipoCombustible = async ({ tc_descripcion }) => {
  try {
    const tipoCombustibles = await execQuery(tipoCombustibleQueries.insert, [
      tc_descripcion,
    ]);
    return {
      success: tipoCombustibles.rowCount > 0,
      tc_descripcion,
      data: tipoCombustibles.rows,
    };
  } catch (error) {
    console.error("Error tipoCombustibles Repository", error);
    throw error;
  }
};

const updateTipoCombustible = async ({ tc_id, tc_descripcion }) => {
  try {
    const tipoCombustibles = await execQuery(tipoCombustibleQueries.update, [
      tc_id,
      tc_descripcion,
    ]);
    return {
      success: tipoCombustibles.rowCount > 0,
      tc_descripcion,
      data: tipoCombustibles.rows,
    };
  } catch (error) {
    console.error("Error tipoCombustibles Repository", error);
    throw error;
  }
};

const disableTipoCombustible = async ({ tc_id }) => {
  try {
    const tipoCombustibles = await execQuery(tipoCombustibleQueries.disable, [
      tc_id,
    ]);
    return {
      success: tipoCombustibles.rowCount > 0,
      data: tipoCombustibles.rows,
    };
  } catch (error) {
    console.error("Error tipoCombustibles Repository", error);
    throw error;
  }
};

module.exports = {
  getTipoCombustible,
  getTipoCombustibleById,
  insertTipoCombustible,
  updateTipoCombustible,
  disableTipoCombustible,
};
