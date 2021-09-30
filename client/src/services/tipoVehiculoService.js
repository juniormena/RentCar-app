import {
  ALERT_ICONS,
  baseURL,
  defualtOptions,
  normalAlert,
} from "../lib/generalHelpers";

const serviceTitle = "Tipo vehiculo";

export const getTipoVehiculo = async () => {
  let res = await fetch(`${baseURL}/tipoVehiculo`);
  if (res.ok) {
    return await res.json();
  }
};

export const createTipoVehiculo = async (e, tipoVehiculo) => {
  try {
    e.preventDefault();
    let options = {
      method: "POST",
      body: JSON.stringify(tipoVehiculo),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/createTipoVehiculo`, options);

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

export const updateTipoVehiculo = async (e, tipoVehiculo) => {
  try {
    e.preventDefault();
    let options = {
      method: "PUT",
      body: JSON.stringify(tipoVehiculo),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/updateTipoVehiculo`, options);

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

export const disableTipoVehiculo = async (tipoVehiculoId) => {
  try {
    let options = {
      method: "PUT",
      body: JSON.stringify(tipoVehiculoId),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/disableTipoVehiculo`, options);

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
