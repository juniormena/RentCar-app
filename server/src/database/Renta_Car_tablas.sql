CREATE TABLE tipo_vehiculo(
tv_id serial NOT NULL primary key,
tv_descripcion varchar(50) NOT NULL,
tv_estado int NOT NULL default 1,
tv_creado timestamptz not null default now(),
tv_modificado timestamptz not null default now()
);

CREATE TABLE marcas(
ma_id serial NOT NULL primary key,
ma_descripcion varchar(50) NOT NULL,
ma_estado int NOT NULL default 1,
ma_creado timestamptz not null default now(),
ma_modificado timestamptz not null default now()
);

CREATE TABLE modelos(
mo_id serial NOT NULL primary key,
mo_id_marca int NOT NULL references marcas(ma_id),
mo_descripcion varchar(50) NOT NULL,
mo_estado int NOT NULL default 1,
mo_creado timestamptz not null default now(),
mo_modificado timestamptz not null default now()
);

CREATE TABLE tipo_combustible(
tc_id serial NOT NULL primary key,
tc_descripcion varchar(50) NOT NULL,
tc_estado int NOT NULL default 1,
tc_creado timestamptz not null default now(),
tc_modificado timestamptz not null default now()
);


CREATE TABLE vehiculos(
v_id serial NOT NULL primary key,
v_descripcion  varchar(50) NOT NULL,
v_chasis varchar(25),
v_motor varchar(25),
v_place varchar(25),	
v_id_tipo_vehiculo int NOT NULL references tipo_vehiculo(tv_id),
v_id_marca int NOT NULL references marcas(ma_id),
v_id_modelo int NOT NULL references modelos(mo_id),
v_id_tipo_combustible int NOT NULL references tipo_combustible(tc_id),
v_estado int NOT NULL default 1,
v_creado timestamptz not null default now(),
v_modificado timestamptz not null default now()
);

CREATE TABLE clientes(
c_id serial NOT NULL primary key,
c_nombre varchar(50) NOT NULL,
c_cedula varchar(50) NOT NULL,
c_tarjeta_cr varchar(30) NOT NULL,
c_limite_credito varchar(50) NOT NULL,
c_tipo_persona varchar(25) NOT NULL, 
c_estado int NOT NULL default 1,
c_creado timestamptz not null default now(),
c_modificado timestamptz not null default now()
);

CREATE TABLE empleados(
emp_id serial NOT NULL primary key,
emp_nombre varchar(50) NOT NULL,
emp_cedula varchar(50) NOT NULL,
emp_tanda_labor varchar(50) NOT NULL,
emp_porciento_comision int NOT NULL,
emp_fecha_ingreso date, 
emp_estado int NOT NULL default 1,
emp_creado timestamptz not null default now(),
emp_modificado timestamptz not null default now()
);

CREATE TABLE renta_devolucion_vehiculo(
rdv_id_renta serial NOT NULL primary key,
rdv_id_empleado int NOT NULL references empleados(emp_id),
rdv_id_vehiculo int NOT NULL references vehiculos(v_id),
rdv_id_cliente int NOT NULL references clientes(c_id),
rdv_fecha_renta date, 
rdv_fecha_devolucion date,
rdv_monto_dia int,
rdv_cant_dias int,
rdv_comentario varchar(200),
rdv_estado int NOT NULL default 1,
rdv_creado timestamptz not null default now(),
rdv_modificado timestamptz not null default now()
);


CREATE TABLE inspeccion(
ins_id_transaccion serial NOT NULL primary key,
ins_id_vehiculo int NOT NULL references vehiculos(v_id),
ins_id_cliente int NOT NULL references clientes(c_id),
ins_tiene_ralladuras bool NOT NULl,
ins_cant_combustible varchar(50) NOT NULL,
ins_tiene_goma_respuesta bool NOT NULL,
ins_tiene_gato bool NOT NULL,
ins_tiene_roturas_cristal bool NOT NULL,
ins_fecha_inspeccion date,
ins_id_empleado int NOT NULL references empleados(emp_id),
ins_estado int NOT NULL default 1,
ins_creado timestamptz not null default now(),
ins_modificado timestamptz not null default now()
);
