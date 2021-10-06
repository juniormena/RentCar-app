import {
  baseURL,
  defualtOptions,
  normalAlert,
  ALERT_ICONS,
} from "../lib/generalHelpers";

const serviceTitle = "Login";
const userKey = "token";

export const login = async (e, empleado, url) => {
  try {
    e.preventDefault();
    let options = {
      method: "POST",
      body: JSON.stringify(empleado),
      ...defualtOptions,
    };
    let res = await fetch(`${baseURL}/login`, options);

    if (res.ok) {
      const jsonResponse = await res.json();
      if (jsonResponse.success) {
        localStorage.setItem(userKey, JSON.stringify(jsonResponse.data[0]));
        window.location.href = url || "/";
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

export function logOut() {
  window.localStorage.clear();
  window.location.reload();
}

export function getCurrentUser() {
  try {
    const user = localStorage.getItem(userKey);
    const currentUser = JSON.parse(user);
    return currentUser;
  } catch (error) {
    return null;
  }
}
