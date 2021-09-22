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

module.exports = {
  getResponse,
  successMessage,
  isEmpty,
};
