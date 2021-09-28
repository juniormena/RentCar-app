const baseURL = process.env.REACT_APP_URL_API_DEVELOPMENT;

export const getMarcas = async () => {
  let res = await fetch(`${baseURL}/marcas`);
  if (res.ok) {
    return await res.json();
  }
};
