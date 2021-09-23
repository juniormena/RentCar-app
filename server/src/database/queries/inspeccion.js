const tableName = "inspeccion";

const inspeccionQueries = {
  selectAll: `SELECT ins_id_transaccion, ins_id_vehiculo, v.v_descripcion, ins_id_cliente, c.c_nombre,
  ins_tiene_ralladuras, ins_cant_combustible, ins_tiene_goma_respuesta, 
  ins_tiene_gato, ins_tiene_roturas_cristal, 
  ins_fecha_inspeccion, ins_id_empleado, emp.emp_nombre, ins_estado, ins_creado, ins_modificado
  FROM ${tableName} INNER JOIN vehiculos v on ins_id_vehiculo = v.v_id 
  INNER JOIN clientes c on ins_id_cliente = c.c_id
  INNER JOIN empleados emp on ins_id_empleado = emp.emp_id 
  WHERE ins_estado = 1 ORDER BY ins_creado desc;`,

  selectOne: `SELECT * FROM ${tableName} WHERE ins_id_transaccion = $1 AND ins_estado = 1;`,

  insert: `INSERT INTO ${tableName}(ins_id_vehiculo, ins_id_cliente, ins_tiene_ralladuras, ins_cant_combustible, 
    ins_tiene_goma_respuesta, ins_tiene_gato, ins_tiene_roturas_cristal, ins_fecha_inspeccion, ins_id_empleado)
	VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,

  disable: `UPDATE ${tableName} SET ins_estado = 0 WHERE ins_id_transaccion = $1;`,

  update: `UPDATE ${tableName} SET ins_id_vehiculo = $2, ins_id_cliente = $3, ins_tiene_ralladuras = $4, ins_cant_combustible = $5, 
  ins_tiene_goma_respuesta = $6, ins_tiene_gato = $7, ins_tiene_roturas_cristal = $8, 
  ins_fecha_inspeccion = $9, ins_id_empleado = $10, ins_modificado = now() WHERE ins_id_transaccion = $1;`,
};

module.exports = inspeccionQueries;
