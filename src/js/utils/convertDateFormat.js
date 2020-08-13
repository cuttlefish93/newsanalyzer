export default function convertDateFormat(responseDate) {
  const monthArr = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const date = new Date(responseDate);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const correctDateFormat = `${day} ${monthArr[month]}, ${year}`;
  return correctDateFormat;
}
