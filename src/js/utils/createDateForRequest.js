export default function createDateForRequest(searchDayInterval) {
  const newDate = new Date();

  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const dayFrom = day - searchDayInterval;

  const dateTo = newDate.toLocaleDateString().replace(/\./g, '-');
  const dateFrom = new Date(year, month, dayFrom).toLocaleDateString().replace(/\./g, '-');

  return {
    from: dateFrom,
    to: dateTo
  }
}
