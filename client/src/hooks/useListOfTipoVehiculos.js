import { useState, useEffect } from "react";
import { getTipoVehiculo } from "../services/tipoVehiculoService";

function useListOfTipoVehiculos() {
  const [tipoVehiculos, setTipoVehiculos] = useState([]);

  useEffect(() => {
    getTipoVehiculo().then(({ data }) => setTipoVehiculos(data));
  }, []);

  const tipoVehiculosOptions = tipoVehiculos.map((tipoVehiculo) => (
    <option key={tipoVehiculo.tv_id} value={tipoVehiculo.tv_id}>
      {tipoVehiculo.tv_descripcion}
    </option>
  ));

  const optionsTipoVehiculos =
    tipoVehiculos.length === 0 ? (
      <option>no hay tipo Vehiculos</option>
    ) : (
      <>
        <option value={0}>Selecciona un tipo de vehiculo...</option>
        {tipoVehiculosOptions}
      </>
    );

  return optionsTipoVehiculos;
}

export default useListOfTipoVehiculos;
