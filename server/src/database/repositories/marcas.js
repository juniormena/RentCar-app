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

module.exports = {
  getMarcas,
};
