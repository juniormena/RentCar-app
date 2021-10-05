import {
  ALERT_ICONS,
  baseURL,
  defualtOptions,
  normalAlert,
} from "../lib/generalHelpers";

const serviceTitle = "Vehiculos";

export const getVehiculos = async () => {
  let res = await fetch(`${baseURL}/vehiculos`);
  if (res.ok) {
    return await res.json();
  }
};

export const createVehiculo = async (e, vehiculo) => {
  try {
    e.preventDefault();
    let options = {
      method: "POST",
      body: JSON.stringify(vehiculo),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/createVehiculo`, options);

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

export const updateVehiculo = async (e, vehiculo) => {
  try {
    e.preventDefault();
    let options = {
      method: "PUT",
      body: JSON.stringify(vehiculo),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/updateVehiculo`, options);

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

export const disablevehiculo = async (vehiculoId) => {
  let vehiculo = {
    v_id: vehiculoId,
    v_estado: 0,
  };
  try {
    let options = {
      method: "PUT",
      body: JSON.stringify(vehiculo),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/disableVehiculo`, options);

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
