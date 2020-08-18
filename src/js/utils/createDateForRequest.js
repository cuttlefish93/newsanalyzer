export default function createDateForRequest() {

  const regexp = /^\d{4}-\d{2}-\d{2}/;
  const newDate = new Date();

  const dayOne = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 6, newDate.getHours());
  const dayTwo = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 5, newDate.getHours());
  const dayThree = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 4, newDate.getHours());
  const dayFour = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 3, newDate.getHours());
  const dayFive = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 2, newDate.getHours());
  const daySix = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 1, newDate.getHours());
  const daySeven = newDate;


  return {
    fullDates: {
      1: dayOne.toISOString().match(regexp)[0],
      2: dayTwo.toISOString().match(regexp)[0],
      3: dayThree.toISOString().match(regexp)[0],
      4: dayFour.toISOString().match(regexp)[0],
      5: dayFive.toISOString().match(regexp)[0],
      6: daySix.toISOString().match(regexp)[0],
      7: daySeven.toISOString().match(regexp)[0]
    },

    days: {
      1: dayOne.getDay(),
      2: dayTwo.getDay(),
      3: dayThree.getDay(),
      4: dayFour.getDay(),
      5: dayFive.getDay(),
      6: daySix.getDay(),
      7: daySeven.getDay()
    },

    dates: {
      1: dayOne.getDate(),
      2: dayTwo.getDate(),
      3: dayThree.getDate(),
      4: dayFour.getDate(),
      5: dayFive.getDate(),
      6: daySix.getDate(),
      7: daySeven.getDate()
    },

    month: newDate.getMonth()
  }
}
