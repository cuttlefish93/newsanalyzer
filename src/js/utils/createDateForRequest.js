export default function createDateForRequest(searchDayInterval) {
  const regexp = /^\d{4}-\d{2}-\d{2}/g;
  const newDate = new Date();

  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const dayFrom = day - searchDayInterval;

  const dateTo = newDate.toISOString().match(regexp).toString();
  const dateFrom = new Date(year, month, dayFrom).toISOString().match(regexp).toString();

  return {
    from: dateFrom,
    to: dateTo
  }
}
