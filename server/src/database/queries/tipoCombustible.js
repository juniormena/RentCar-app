const tableName = "tipo_combustible";

const tipoCombustibleQueries = {
  selectAll: `SELECT * FROM ${tableName} WHERE tc_estado = 1 ORDER BY tc_creado desc;`,
  selectOne: `SELECT * FROM ${tableName} WHERE tc_id = $1 AND tc_estado = 1;`,
  insert: `INSERT INTO ${tableName} (tc_descripcion) VALUES($1);`,
  disable: `UPDATE ${tableName} SET tc_estado = 0 WHERE tc_id = $1;`,
  update: `UPDATE ${tableName} SET tc_descripcion = $2, tc_modificado = now() WHERE tc_id = $1;`,
};

module.exports = tipoCombustibleQueries;
