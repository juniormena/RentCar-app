import { TIPO_PERSONA } from "../lib/constants";

function useListOfTipoPersona() {
  const tipoPersonas = Object.values(TIPO_PERSONA);

  const tipoPersonaOptions = tipoPersonas.map((tipoPersona) => (
    <option key={tipoPersona} value={tipoPersona}>
      {tipoPersona}
    </option>
  ));

  const optionsTipoPersonas =
    tipoPersonas.length === 0 ? (
      <option>no hay tipo Personas</option>
    ) : (
      <>
        <option value={0}>Selecciona un tipo de persona...</option>
        {tipoPersonaOptions}
      </>
    );

  return optionsTipoPersonas;
}

export default useListOfTipoPersona;
