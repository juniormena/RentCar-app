import { TANDA_LABOR } from "../lib/constants";

function useListOfTandaLabor() {
  const tandaLabor = Object.values(TANDA_LABOR);

  const tandaLaborOptions = tandaLabor.map((tipoPersona) => (
    <option key={tipoPersona} value={tipoPersona}>
      {tipoPersona}
    </option>
  ));

  const optionsTandaLabor =
    tandaLabor.length === 0 ? (
      <option>no hay tipo de tanda</option>
    ) : (
      <>
        <option value={0}>Selecciona una tanda de labor...</option>
        {tandaLaborOptions}
      </>
    );

  return optionsTandaLabor;
}

export default useListOfTandaLabor;
