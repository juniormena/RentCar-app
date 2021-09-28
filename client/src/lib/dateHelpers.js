import moment from "moment";
import "moment/locale/es-do";

moment.locale("es-do");

export const formatDate = (date) => {
  return moment(date).format("YYYY-MM-DD h:mm a");
};
