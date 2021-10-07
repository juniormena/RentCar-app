import { useState, useEffect } from "react";
import { getClientes } from "../services/clientesServicios";

function useListOfClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes().then(({ data }) => setClientes(data));
  }, []);

  const clientesOptions = clientes.map((cliente) => (
    <option key={cliente.c_id} value={cliente.c_id}>
      {cliente.c_nombre}
    </option>
  ));

  const optionsClientes =
    clientes.length === 0 ? (
      <option>no hay clientes</option>
    ) : (
      <>
        <option value={0}>Selecciona un cliente...</option>
        {clientesOptions}
      </>
    );

  return optionsClientes;
}

export default useListOfClientes;
