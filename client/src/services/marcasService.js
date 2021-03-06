import {
  ALERT_ICONS,
  baseURL,
  defualtOptions,
  normalAlert,
} from "../lib/generalHelpers";

const serviceTitle = "Marcas";

export const getMarcas = async () => {
  let res = await fetch(`${baseURL}/marcas`);
  if (res.ok) {
    return await res.json();
  }
};

export const createMarca = async (e, marca) => {
  try {
    e.preventDefault();
    let options = {
      method: "POST",
      body: JSON.stringify(marca),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/createMarca`, options);

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

export const updateMarca = async (e, marca) => {
  try {
    e.preventDefault();
    let options = {
      method: "PUT",
      body: JSON.stringify(marca),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/updateMarca`, options);

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

export const disableMarca = async (marcaId) => {
  try {
    let options = {
      method: "PUT",
      body: JSON.stringify(marcaId),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/disableMarca`, options);

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
