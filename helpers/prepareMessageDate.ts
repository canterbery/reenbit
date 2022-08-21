export const prepareMessageDate = (date: string) => {
  let newDate = new Date(date).toDateString();
  const arr = newDate.split(" ");
  arr.shift();
  return arr.join(" ");
};

export const prepareMessageDateWithTime = (date: string) => {
  let newDate = new Date(date);
  let time = newDate.toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: true,
    timeZone: "UTC",
  });
  let result =
    newDate.getMonth() +
    1 +
    "/" +
    newDate.getDate() +
    "/" +
    newDate.getFullYear().toString().slice(-2) +
    " " +
    time;
  return result;
};
