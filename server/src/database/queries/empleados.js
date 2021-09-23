const tableName = "empleados";

const empleadosQueries = {
  selectAll: `SELECT * FROM ${tableName} WHERE emp_estado = 1 ORDER BY emp_creado desc;`,
  selectOne: `SELECT * FROM ${tableName} WHERE emp_id = $1 AND emp_estado = 1;`,
  insert: `INSERT INTO ${tableName}(emp_nombre, emp_cedula, emp_tanda_labor, emp_porciento_comision, emp_fecha_ingreso)
	VALUES ($1, $2, $3, $4, $5)`,
  disable: `UPDATE ${tableName} SET emp_estado = 0 WHERE emp_id = $1;`,
  update: `UPDATE ${tableName} SET emp_nombre = $2, emp_cedula = $3, emp_tanda_labor = $4, emp_porciento_comision = $5, 
  emp_modificado = now() WHERE emp_id = $1;`,
};

module.exports = empleadosQueries;
