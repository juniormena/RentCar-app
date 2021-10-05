import {
  ALERT_ICONS,
  baseURL,
  defualtOptions,
  normalAlert,
} from "../lib/generalHelpers";

const serviceTitle = "Clientes";

export const getClientes = async () => {
  let res = await fetch(`${baseURL}/clientes`);
  if (res.ok) {
    return await res.json();
  }
};

export const createCliente = async (e, cliente) => {
  try {
    e.preventDefault();
    let options = {
      method: "POST",
      body: JSON.stringify(cliente),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/createCliente`, options);

    if (res.ok) {
      const jsonResponse = await res.json();
      if (jsonResponse.success) {
        normalAlert(ALERT_ICONS.SUCCESS, serviceTitle, jsonResponse.message);
      } else {
        normalAlert(ALERT_ICONS.ERROR, serviceTitle, jsonResponse.message);
      }
    } else {
      normalAlert(ALERT_ICONS.ERROR, serviceTitle, "Algo salio mal!");
    }
  } catch (err) {
    normalAlert(ALERT_ICONS.ERROR, serviceTitle, err.message);
  }
};

export const updateCliente = async (e, cliente) => {
  try {
    e.preventDefault();
    let options = {
      method: "PUT",
      body: JSON.stringify(cliente),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/updateCliente`, options);

    if (res.ok) {
      const jsonResponse = await res.json();
      if (jsonResponse.success) {
        normalAlert(ALERT_ICONS.SUCCESS, serviceTitle, jsonResponse.message);
      } else {
        normalAlert(ALERT_ICONS.ERROR, serviceTitle, jsonResponse.message);
      }
    } else {
      normalAlert(ALERT_ICONS.ERROR, serviceTitle, "Algo salio mal!");
    }
  } catch (err) {
    normalAlert(ALERT_ICONS.ERROR, serviceTitle, err.message);
  }
};

export const disableCliente = async (clienteId) => {
  try {
    let options = {
      method: "PUT",
      body: JSON.stringify(clienteId),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/disableCliente`, options);

    if (res.ok) {
      const jsonResponse = await res.json();
      if (jsonResponse.success) {
        normalAlert(ALERT_ICONS.SUCCESS, serviceTitle, jsonResponse.message);
      } else {
        normalAlert(ALERT_ICONS.ERROR, serviceTitle, jsonResponse.message);
      }
    } else {
      normalAlert(ALERT_ICONS.ERROR, serviceTitle, "Algo salio mal!");
    }
  } catch (err) {
    normalAlert(ALERT_ICONS.ERROR, serviceTitle, err.message);
  }
};
