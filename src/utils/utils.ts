export const format_date = (date_str: string) => {
    console.log(date_str)
  const date = new Date(date_str);
  console.log(date)
  const day =
    date.getFullYear() +
    "-" +
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    "-" +
    (date.getDate() > 9 ? date.getDate() : "0" + date.getDate());

  return day;
};
