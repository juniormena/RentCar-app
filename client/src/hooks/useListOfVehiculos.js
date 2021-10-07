import { useState, useEffect } from "react";
import { getVehiculos } from "../services/vehiculosService";

function useListOfVehiculos() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    getVehiculos().then(({ data }) => setVehiculos(data));
  }, []);

  const vehiculosFilteredByStatus = vehiculos.filter(
    (vehiculo) => vehiculo.v_estado !== 2
  );

  const vehiculosOptions = vehiculosFilteredByStatus.map((vehiculo) => (
    <option key={vehiculo.v_id} value={vehiculo.v_id}>
      {vehiculo.v_descripcion}
    </option>
  ));

  const optionsVehiculos =
    vehiculosFilteredByStatus.length === 0 ? (
      <option>no hay vehiculos</option>
    ) : (
      <>
        <option value={0}>Selecciona un vehiculo...</option>
        {vehiculosOptions}
      </>
    );

  return optionsVehiculos;
}

export default useListOfVehiculos;
