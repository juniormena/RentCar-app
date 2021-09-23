const tableName = "vehiculos";

const vehiculosQueries = {
  selectAll: `SELECT v_id, v_descripcion, v_chasis, v_motor, v_place, 
  v_id_tipo_vehiculo, tv.tv_descripcion, v_id_marca, ma.ma_descripcion, 
  v_id_modelo, mo.mo_descripcion, v_id_tipo_combustible, tc.tc_descripcion,
  v_estado, v_creado,  v_modificado FROM ${tableName}
  INNER JOIN tipo_vehiculo tv on v_id_tipo_vehiculo = tv.tv_id
  INNER JOIN marcas ma on v_id_marca = ma.ma_id
  INNER JOIN modelos mo on v_id_modelo = mo.mo_id
  INNER JOIN tipo_combustible tc on v_id_tipo_combustible = tc_id
  WHERE v_estado = 1 ORDER BY v_creado desc;`,
  selectOne: `SELECT * FROM ${tableName} WHERE v_id = $1 AND v_estado = 1;`,
  insert: `INSERT INTO public.vehiculos(v_descripcion, v_chasis, 
    v_motor, v_place, v_id_tipo_vehiculo, v_id_marca, v_id_modelo, v_id_tipo_combustible)
	VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`,
  disable: `UPDATE ${tableName} SET v_estado = 0 WHERE v_id = $1;`,
  update: `UPDATE ${tableName} SET v_descripcion = $2, v_chasis = $3, 
  v_motor = $4, v_place = $5, v_id_tipo_vehiculo = $6, 
  v_id_marca = $7, v_id_modelo = $8, v_id_tipo_combustible = $9, v_modificado = now() WHERE v_id = $1;`,
};

module.exports = vehiculosQueries;
