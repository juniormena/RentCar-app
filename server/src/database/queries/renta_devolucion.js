const tableName = "renta_devolucion_vehiculo";

const rentaDevolucionQueries = {
  selectAll: `SELECT rdv_id_renta, rdv_id_empleado, emp.emp_nombre, rdv_id_vehiculo, v.v_descripcion, 
  rdv_id_cliente, c.c_nombre, rdv_fecha_renta, rdv_fecha_devolucion, rdv_monto_dia, rdv_cant_dias, 
  rdv_comentario, rdv_estado, rdv_creado, rdv_modificado
  FROM renta_devolucion_vehiculo
  INNER JOIN vehiculos v on rdv_id_vehiculo = v.v_id 
  INNER JOIN clientes c on rdv_id_cliente = c.c_id
  INNER JOIN empleados emp on rdv_id_empleado = emp.emp_id 
  ORDER BY rdv_creado desc;`,
  selectOne: `SELECT * FROM ${tableName} WHERE rdv_id_renta = $1`,
  insert: `INSERT INTO ${tableName}(
	rdv_id_empleado, rdv_id_vehiculo, rdv_id_cliente, rdv_fecha_renta, rdv_fecha_devolucion, rdv_monto_dia, rdv_cant_dias, rdv_comentario)
	VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`,
  disable: `UPDATE ${tableName} SET rdv_estado = 0 WHERE rdv_id_renta = $1;`,
  update: `UPDATE ${tableName} SET rdv_id_empleado = $2, rdv_id_vehiculo = $3, 
  rdv_id_cliente = $4, rdv_fecha_renta = $5, rdv_fecha_devolucion = $6, rdv_monto_dia = $7, 
  rdv_cant_dias = $8, rdv_comentario = $9, rdv_estado = $10, rdv_modificado = now() WHERE rdv_id_renta = $1;`,
};

module.exports = rentaDevolucionQueries;
