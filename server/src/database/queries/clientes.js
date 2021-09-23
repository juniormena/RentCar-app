const tableName = "clientes";

const clientesQueries = {
  selectAll: `SELECT * FROM ${tableName} WHERE c_estado = 1 ORDER BY c_creado desc;`,
  selectOne: `SELECT * FROM ${tableName} WHERE c_id = $1 AND c_estado = 1;`,
  insert: `INSERT INTO ${tableName}(c_nombre, c_cedula, c_tarjeta_cr, c_limite_credito, c_tipo_persona)
	VALUES ($1, $2, $3, $4, $5);`,
  disable: `UPDATE ${tableName} SET c_estado = 0 WHERE c_id = $1;`,
  update: `UPDATE ${tableName} SET c_nombre = $2, 
  c_cedula = $3, c_tarjeta_cr = $4, c_limite_credito = $5, c_tipo_persona = $6, c_modificado = now() WHERE c_id = $1;`,
};

module.exports = clientesQueries;
