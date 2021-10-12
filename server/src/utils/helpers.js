function successMessage(initialMessage, action) {
  const successMessages = {
    created: `${initialMessage} Creado exitosamente`,
    deleted: `${initialMessage} Eliminado exitosamente`,
    updated: `${initialMessage} Actualizado exitosamente`,
  };

  return successMessages[action];
}

const getResponse = (message, success = true, data = []) => {
  return { message, success, data };
};

const isEmpty = (string) => {
  if (string.trim() === "") {
    throw new Error("There are fields that cannot be Empty");
  }
  return true;
};

const validateDominicanID = (ced) => {
  var c = ced.replace(/-/g, "");
  var cedula = c.substr(0, c.length - 1);
  var verificador = c.substr(c.length - 1, 1);
  var suma = 0;
  var cedulaValida = false;
  if (ced.length < 11) {
    throw new Error("La cedula no es correcta");
  }
  for (i = 0; i < cedula.length; i++) {
    mod = "";
    if (i % 2 == 0) {
      mod = 1;
    } else {
      mod = 2;
    }
    let res = cedula.substr(i, 1) * mod;
    if (res > 9) {
      res = res.toString();
      uno = res.substr(0, 1);
      dos = res.substr(1, 1);
      res = eval(uno) + eval(dos);
    }
    suma += eval(res);
  }
  el_numero = (10 - (suma % 10)) % 10;
  if (el_numero == verificador && cedula.substr(0, 3) != "000") {
    cedulaValida = true;
  } else {
    throw new Error("La cedula no es correcta");
  }
  return cedulaValida;
};

module.exports = {
  getResponse,
  successMessage,
  isEmpty,
  validateDominicanID,
};
