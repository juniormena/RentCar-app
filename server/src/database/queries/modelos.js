const tableName = "modelos";

const modelosQueries = {
  selectAll: `SELECT mo_id, mo_id_marca, ma.ma_descripcion, mo_descripcion, mo_estado, mo_creado, 
  mo_modificado FROM ${tableName} INNER JOIN marcas ma on mo_id_marca = ma.ma_id 
  WHERE mo_estado = 1 ORDER BY mo_creado desc;`,
  selectOne: `SELECT * FROM ${tableName} WHERE mo_id = $1 AND mo_estado = 1;`,
  selectByMarca: `SELECT mo_id, mo_id_marca, ma.ma_descripcion, mo_descripcion, mo_estado, mo_creado, 
  mo_modificado FROM ${tableName} INNER JOIN marcas ma on mo_id_marca = ma.ma_id 
  WHERE mo_id_marca = $1 AND mo_estado = 1 ORDER BY mo_creado desc;`,
  insert: `INSERT INTO ${tableName}(mo_id_marca, mo_descripcion) VALUES($1, $2);`,
  disable: `UPDATE ${tableName} SET mo_estado = 0 WHERE mo_id = $1;`,
  update: `UPDATE ${tableName} SET mo_id_marca = $2, mo_descripcion = $3, mo_modificado = now() WHERE mo_id = $1;`,
};

module.exports = modelosQueries;
