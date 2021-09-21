const tableName = "marcas";

const marcasQueries = {
  selectAll: `SELECT * FROM ${tableName} WHERE ma_estado = 1 ORDER BY ma_creado desc;`,
  selectOne: `SELECT * FROM ${tableName} WHERE ma_id = $1 AND ma_estado = 1;`,
  insert: `INSERT INTO ${tableName}(ma_descripcion) VALUES($1);`,
  disable: `UPDATE ${tableName} SET ma_estado = 0 WHERE ma_id = $1;`,
  update: `UPDATE ${tableName} SET ma_descripcion = $2 WHERE ma_id = $1;`,
};

module.exports = marcasQueries;
