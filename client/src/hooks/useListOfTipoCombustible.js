import { useState, useEffect } from "react";
import { getTipoCombustible } from "../services/tipoCombustibleService";

function useListOfTipoCombustibles() {
  const [tipoCombustibles, setTipoCombustibles] = useState([]);

  useEffect(() => {
    getTipoCombustible().then(({ data }) => setTipoCombustibles(data));
  }, []);

  const tipoCombustiblesOptions = tipoCombustibles.map((tipoCombustible) => (
    <option key={tipoCombustible.tc_id} value={tipoCombustible.tc_id}>
      {tipoCombustible.tc_descripcion}
    </option>
  ));

  const optionsTipoCombustibles =
    tipoCombustibles.length === 0 ? (
      <option>no hay tipo Combustibles</option>
    ) : (
      <>
        <option value={0}>Selecciona un tipo de combustible...</option>
        {tipoCombustiblesOptions}
      </>
    );

  return optionsTipoCombustibles;
}

export default useListOfTipoCombustibles;
