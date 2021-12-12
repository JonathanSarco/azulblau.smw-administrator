import moment from "moment";

const formatDateToFullDate = (dateToFormat) => {
  return moment.utc(dateToFormat).format("DD/MM/YYYY");
};

export { formatDateToFullDate };
