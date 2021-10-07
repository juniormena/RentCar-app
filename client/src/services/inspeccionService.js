import {
  ALERT_ICONS,
  baseURL,
  defualtOptions,
  normalAlert,
} from "../lib/generalHelpers";

const serviceTitle = "Inspeccion";

export const getInspecciones = async () => {
  let res = await fetch(`${baseURL}/inspecciones`);
  if (res.ok) {
    return await res.json();
  }
};

export const createInspeccion = async (e, inspeccion) => {
  try {
    e.preventDefault();
    let options = {
      method: "POST",
      body: JSON.stringify(inspeccion),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/createInspeccion`, options);

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

export const updateInspeccion = async (e, inspeccion) => {
  try {
    e.preventDefault();
    let options = {
      method: "PUT",
      body: JSON.stringify(inspeccion),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/updateInspeccion`, options);

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

export const disableInspeccion = async (inspeccionId) => {
  try {
    let options = {
      method: "PUT",
      body: JSON.stringify(inspeccionId),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/disableInspeccion`, options);

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
