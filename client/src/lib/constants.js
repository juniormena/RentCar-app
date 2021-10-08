export const TIPO_PERSONA = {
  FISICA: "FISICA",
  JURIDICA: "JURIDICA",
};

export const TANDA_LABOR = {
  MATUTINA: "MATUTINA",
  VESPERTINA: "VESPERTINA",
  NOCTURNA: "NOCTURNA",
};

export const YES_NO_OPTIONS = {
  SI: true,
  NO: false,
};

export const COMBUSTIBLE_OPTIONS = {
  UN_CUARTO: "1/4",
  UN_MEDIO: "1/2",
  TRES_CUARTO: "3/4",
  LLENO: "LLENO",
};

export const VEHICULOS_STATUS = {
  DISPONIBLE: 1,
  RENTADO: 2,
};

export const RENTA_STATUS = {
  EN_PROCESO: 1,
  FINALIZADO: 2,
};

export const TODAY = new Date().toISOString().split("T")[0];
