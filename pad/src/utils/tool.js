export function timeText(date) {
  return [
    date.getFullYear(),
    (100 + (date.getMonth() + 1) + "").slice(1),
    date.getDate()
  ].join("-");
}
