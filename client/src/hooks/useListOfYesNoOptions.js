import { YES_NO_OPTIONS } from "../lib/constants";

function useListOfYesNoOptions() {
  const yesNo = Object.entries(YES_NO_OPTIONS);

  const yesNoOptions = yesNo.map(([key, value]) => (
    <option key={key} value={value}>
      {key}
    </option>
  ));

  const optionsYesNo =
    yesNo.length === 0 ? (
      <option>no hay tipo opciones</option>
    ) : (
      <>
        <option value={0}>Selecciona la cantidad...</option>
        {yesNoOptions}
      </>
    );

  return optionsYesNo;
}

export default useListOfYesNoOptions;
