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

module.exports = {
  getResponse,
  successMessage,
};
