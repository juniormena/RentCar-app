import { useState, useEffect } from "react";
import { getMarcas } from "../services/marcasService";

function useListOfMarcas() {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    getMarcas().then(({ data }) => setMarcas(data));
  }, []);

  const marcasOptions = marcas.map((marca) => (
    <option key={marca.ma_id} value={marca.ma_id}>
      {marca.ma_descripcion}
    </option>
  ));

  const optionsMarcas =
    marcas.length === 0 ? (
      <option>no hay marcas</option>
    ) : (
      <>
        <option value={0}>Selecciona una marca...</option>
        {marcasOptions}
      </>
    );

  return optionsMarcas;
}

export default useListOfMarcas;
