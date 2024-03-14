export const formatDateToString = (inputDate: string | Date) => {
  const options: {} = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const date = new Date(inputDate);
  const formattedDate = date.toLocaleDateString("fr-FR", options);
  return formattedDate;
};
