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

const validateDominicanID = (cedula) => {
  let vnTotal = 0;
  let pLongCed = cedula.trim().length;
  const digitoMult = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];

  if (pLongCed < 11 || pLongCed > 11) {
    throw new Error("Cedula no tiene un formato correcto");
  }

  for (let vDig = 1; vDig <= pLongCed; vDig++) {
    let vCalculo =
      parseInt(vcCedula.substring(vDig - 1, 1)) * digitoMult[vDig - 1];
    if (vCalculo < 10) vnTotal += vCalculo;
    else
      vnTotal +=
        parseInt(vCalculo.toString().substring(0, 1)) +
        parseInt(vCalculo.toString().substring(1, 1));
  }

  if (vnTotal % 10 == 0) return true;
  else throw new Error("Cedula no tiene un formato correcto");
};

module.exports = {
  getResponse,
  successMessage,
  isEmpty,
  validateDominicanID,
};
