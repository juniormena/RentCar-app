import { useState, useEffect } from "react";
import { getEmpleados } from "../services/empleadosServices";

function useListOfEmpleados() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    getEmpleados().then(({ data }) => setEmpleados(data));
  }, []);

  const empleadosOptions = empleados.map((empleado) => (
    <option key={empleado.emp_id} value={empleado.emp_id}>
      {empleado.emp_nombre}
    </option>
  ));

  const optionsEmpleados =
    empleados.length === 0 ? (
      <option>no hay empleados</option>
    ) : (
      <>
        <option value={0}>Selecciona un empleado...</option>
        {empleadosOptions}
      </>
    );

  return optionsEmpleados;
}

export default useListOfEmpleados;
