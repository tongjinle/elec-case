export function timeText(date) {
  return [
    date.getFullYear(),
    (100 + (date.getMonth() + 1) + "").slice(1),
    date.getDate()
  ].join("-");
}

export function formateTime(time) {
  if (!time) {
    return time;
  }
  time = new Date(time);
  let y = time.getFullYear();
  let mo = time.getMonth() + 1;
  let d = time.getDate();
  let h = time.getHours();
  let mi = time.getMinutes();
  let s = time.getSeconds();
  return (
    y + "-" + (mo >= 10 ? mo : "0" + mo) + "-" + (d >= 10 ? d : "0" + d)
    // +
    // " " +
    // (h >= 10 ? h : "0" + h) +
    // ":" +
    // (mi >= 10 ? mi : "0" + mi) +
    // ":" +
    // (s >= 10 ? s : "0" + s)
  );
}
