import {
  ALERT_ICONS,
  baseURL,
  defualtOptions,
  normalAlert,
} from "../lib/generalHelpers";

const serviceTitle = "Inspeccion";

export const getRentaDevoluciones = async () => {
  let res = await fetch(`${baseURL}/rentaDevolucion`);
  if (res.ok) {
    return await res.json();
  }
};

export const createRentaDevolucion = async (e, rentaDevolucion) => {
  try {
    e.preventDefault();
    let options = {
      method: "POST",
      body: JSON.stringify(rentaDevolucion),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/createRentaDevolucion`, options);

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

export const updateRentaDevolucion = async (e, rentaDevolucion) => {
  try {
    e.preventDefault();
    let options = {
      method: "PUT",
      body: JSON.stringify(rentaDevolucion),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/updateRentaDevolucion`, options);

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

export const disableRentaDevolucion = async (rentaDevolucionId) => {
  try {
    let options = {
      method: "PUT",
      body: JSON.stringify(rentaDevolucionId),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/disableRentaDevolucion`, options);

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
