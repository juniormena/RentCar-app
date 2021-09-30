import {
  ALERT_ICONS,
  baseURL,
  defualtOptions,
  normalAlert,
} from "../lib/generalHelpers";

const serviceTitle = "Modelos";

export const getModelos = async () => {
  let res = await fetch(`${baseURL}/modelos`);
  if (res.ok) {
    return await res.json();
  }
};

export const createModelo = async (e, modelo) => {
  try {
    e.preventDefault();
    let options = {
      method: "POST",
      body: JSON.stringify(modelo),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/createModelo`, options);

    if (res.ok) {
      const jsonResponse = await res.json();
      if (jsonResponse.success) {
        normalAlert(ALERT_ICONS.SUCCESS, serviceTitle, jsonResponse.message);
      } else {
        normalAlert(ALERT_ICONS.ERROR, serviceTitle, jsonResponse.message);
      }
    } else {
      normalAlert(ALERT_ICONS.ERROR, serviceTitle, res.statusText);
    }
  } catch (err) {
    normalAlert(ALERT_ICONS.ERROR, serviceTitle, err.message);
  }
};

export const updateModelo = async (e, modelo) => {
  try {
    e.preventDefault();
    let options = {
      method: "PUT",
      body: JSON.stringify(modelo),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/updateModelo`, options);

    if (res.ok) {
      const jsonResponse = await res.json();
      if (jsonResponse.success) {
        normalAlert(ALERT_ICONS.SUCCESS, serviceTitle, jsonResponse.message);
      } else {
        normalAlert(ALERT_ICONS.ERROR, serviceTitle, jsonResponse.message);
      }
    } else {
      normalAlert(ALERT_ICONS.ERROR, serviceTitle, res.statusText);
    }
  } catch (err) {
    normalAlert(ALERT_ICONS.ERROR, serviceTitle, err.message);
  }
};

export const disableModelo = async (modeloId) => {
  try {
    let options = {
      method: "PUT",
      body: JSON.stringify(modeloId),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/disableModelo`, options);

    if (res.ok) {
      const jsonResponse = await res.json();
      if (jsonResponse.success) {
        normalAlert(ALERT_ICONS.SUCCESS, serviceTitle, jsonResponse.message);
      } else {
        normalAlert(ALERT_ICONS.ERROR, serviceTitle, jsonResponse.message);
      }
    } else {
      normalAlert(ALERT_ICONS.ERROR, serviceTitle, res.statusText);
    }
  } catch (err) {
    normalAlert(ALERT_ICONS.ERROR, serviceTitle, err.message);
  }
};
