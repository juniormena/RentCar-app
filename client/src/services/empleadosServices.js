import {
  ALERT_ICONS,
  baseURL,
  defualtOptions,
  normalAlert,
} from "../lib/generalHelpers";

const serviceTitle = "Empleados";

export const getEmpleados = async () => {
  let res = await fetch(`${baseURL}/empleados`);
  if (res.ok) {
    return await res.json();
  }
};

export const createEmpleado = async (e, empleado) => {
  try {
    e.preventDefault();
    let options = {
      method: "POST",
      body: JSON.stringify(empleado),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/createEmpleado`, options);

    if (res.ok) {
      const jsonResponse = await res.json();
      if (jsonResponse.success) {
        normalAlert(ALERT_ICONS.SUCCESS, serviceTitle, jsonResponse.message);
      } else {
        normalAlert(ALERT_ICONS.ERROR, serviceTitle, jsonResponse.message);
      }
    } else {
      const json = await res.json();
      normalAlert(ALERT_ICONS.ERROR, serviceTitle, json.message);
    }
  } catch (err) {
    normalAlert(ALERT_ICONS.ERROR, serviceTitle, err.message);
  }
};

export const updateEmpleado = async (e, empleado) => {
  try {
    e.preventDefault();
    let options = {
      method: "PUT",
      body: JSON.stringify(empleado),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/updateEmpleado`, options);

    if (res.ok) {
      const jsonResponse = await res.json();
      if (jsonResponse.success) {
        normalAlert(ALERT_ICONS.SUCCESS, serviceTitle, jsonResponse.message);
      } else {
        normalAlert(ALERT_ICONS.ERROR, serviceTitle, jsonResponse.message);
      }
    } else {
      const json = await res.json();
      normalAlert(ALERT_ICONS.ERROR, serviceTitle, json.message);
    }
  } catch (err) {
    normalAlert(ALERT_ICONS.ERROR, serviceTitle, err.message);
  }
};

export const disableEmpleado = async (empleadoId) => {
  try {
    let options = {
      method: "PUT",
      body: JSON.stringify(empleadoId),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/disableEmpleado`, options);

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
