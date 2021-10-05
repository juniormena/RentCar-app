import { useState, useEffect } from "react";
import { getModelos } from "../services/modelosService";

function useListOfModelos(marcaId) {
  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    getModelos().then(({ data }) => setModelos(data));
  }, []);

  const modelosFilteredByMarca = modelos.filter(
    (modelo) => modelo.mo_id_marca === parseInt(marcaId)
  );

  const modelosOptions = modelosFilteredByMarca.map((modelo) => (
    <option key={modelo.mo_id} value={modelo.mo_id}>
      {modelo.mo_descripcion}
    </option>
  ));

  const optionsModelos =
    modelosFilteredByMarca.length === 0 ? (
      <option>no hay modelos</option>
    ) : (
      <>
        <option value={0}>Selecciona un modelo...</option>
        {modelosOptions}
      </>
    );

  return optionsModelos;
}

export default useListOfModelos;
