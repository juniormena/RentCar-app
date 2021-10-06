import moment from "moment";
import "moment/locale/es-do";

moment.locale("es-do");

export const formatDate = (date, showHour = true) => {
  return moment(date).format(`YYYY-MM-DD ${showHour ? "h:mm a" : ""}`);
};
