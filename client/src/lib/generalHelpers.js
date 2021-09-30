import Swal from "sweetalert2";

export function handleChangeInput(e, state, setState) {
  const name = e.target.name;

  const value =
    e.target.type === "checkbox" ? e.target.checked : e.target.value;
  setState({ ...state, [name]: value });
}

export const baseURL = process.env.REACT_APP_URL_API_DEVELOPMENT;

export function normalAlert(icon, title, text) {
  Swal.fire({
    icon,
    title,
    text,
    timer: 5000,
  }).then(() => {
    if (icon === ALERT_ICONS.SUCCESS) window.location.reload();
  });
}

export const ALERT_ICONS = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  QUESTION: "question",
};

export const defualtOptions = {
  mode: "cors",
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "manual", // manual, *follow, error
  referrerPolicy: "no-referrer",
};

export function confirmationAlert(titulo, mensaje, cb = null) {
  Swal.fire({
    title: `<h4>${titulo}</h4>`,
    text: `${mensaje}`,
    icon: ALERT_ICONS.QUESTION,
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      if (cb !== null) {
        cb();
      }
    }
  });
}
