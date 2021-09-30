import {
  ALERT_ICONS,
  baseURL,
  defualtOptions,
  normalAlert,
} from "../lib/generalHelpers";

const serviceTitle = "Tipo combustible";

export const getTipoCombustible = async () => {
  let res = await fetch(`${baseURL}/tipoCombustible`);
  if (res.ok) {
    return await res.json();
  }
};

export const createTipoCombustible = async (e, tipoCombustible) => {
  try {
    e.preventDefault();
    let options = {
      method: "POST",
      body: JSON.stringify(tipoCombustible),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/createTipoCombustible`, options);

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

export const updateTipoCombustible = async (e, tipoCombustible) => {
  try {
    e.preventDefault();
    let options = {
      method: "PUT",
      body: JSON.stringify(tipoCombustible),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/updateTipoCombustible`, options);

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

export const disableTipoCombustible = async (tipoCombustibleId) => {
  try {
    let options = {
      method: "PUT",
      body: JSON.stringify(tipoCombustibleId),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/disableTipoCombustible`, options);

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
