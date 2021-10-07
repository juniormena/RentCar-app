import { COMBUSTIBLE_OPTIONS } from "../lib/constants";

function useListOfCantCombustible() {
  const cantCombustible = Object.values(COMBUSTIBLE_OPTIONS);

  const cantCombustibleOptions = cantCombustible.map((cantCombustible) => (
    <option key={cantCombustible} value={cantCombustible}>
      {cantCombustible}
    </option>
  ));

  const optionsCantCombustible =
    cantCombustible.length === 0 ? (
      <option>no hay tipo cant combustible</option>
    ) : (
      <>
        <option value={0}>Selecciona la cantidad...</option>
        {cantCombustibleOptions}
      </>
    );

  return optionsCantCombustible;
}

export default useListOfCantCombustible;
