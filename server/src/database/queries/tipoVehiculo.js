const tableName = "tipo_vehiculo";

const tipoVehiculoQueries = {
  selectAll: `SELECT * FROM ${tableName} WHERE tv_estado = 1 ORDER BY tv_creado desc;`,
  selectOne: `SELECT * FROM ${tableName} WHERE tv_id = $1 AND tv_estado = 1;`,
  insert: `INSERT INTO ${tableName} (tv_descripcion) VALUES($1);`,
  disable: `UPDATE ${tableName} SET tv_estado = 0 WHERE tv_id = $1;`,
  update: `UPDATE ${tableName} SET tv_descripcion = $2 WHERE tv_id = $1;`,
};

module.exports = tipoVehiculoQueries;
