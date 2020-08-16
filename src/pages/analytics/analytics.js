import './analytics.css';

const searchKeyword = document.querySelector('.search-keyword-data__keyword');
const totalResultsNum = document.querySelector('#common-num');
const keyInTitlesNum = document.querySelector('#num-in-title');
searchKeyword.textContent = localStorage.getItem('keyword');

const data = JSON.parse(localStorage.getItem('news'));
// console.log(data);

totalResultsNum.textContent = data.totalResults;

function searchKeyInTitles(dataArr, key) {
  let counter = 0;
  const regexp = new RegExp(`${key}`, 'i');
  console.log(regexp);
  console.log(data.articles);

  // dataArr.forEach(item => {
  //   let isMatch = regexp.test(item.title);
  //   if (isMatch) {
  //     counter += 1;
  //   }
  // })
  const result = dataArr.reduce((counter, item) => {
    let isMatch = regexp.test(item.title);
    if (isMatch) {
      counter += 1;
    }
    return counter;
  }, 0);
  console.log(result);
  return result;
}

keyInTitlesNum.textContent = searchKeyInTitles(data.articles, localStorage.getItem('keyword'));

function setWeekDay(weekDates, { dayOneNode, dayTwoNode, dayThreeNode, dayFourNode, dayFiveNode, daySixNode, daySevenNode }) {
  const weekArr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  // const weekDates = getWeekDate(date);

  dayOneNode.textContent = `${weekDates[1].getDate()}, ${weekArr[weekDates[1].getDay()]}`;
  dayTwoNode.textContent = `${weekDates[2].getDate()}, ${weekArr[weekDates[2].getDay()]}`;
  dayThreeNode.textContent = `${weekDates[3].getDate()}, ${weekArr[weekDates[3].getDay()]}`;
  dayFourNode.textContent = `${weekDates[4].getDate()}, ${weekArr[weekDates[4].getDay()]}`;
  dayFiveNode.textContent = `${weekDates[5].getDate()}, ${weekArr[weekDates[5].getDay()]}`;
  daySixNode.textContent = `${weekDates[6].getDate()}, ${weekArr[weekDates[6].getDay()]}`;
  daySevenNode.textContent = `${weekDates[7].getDate()}, ${weekArr[weekDates[7].getDay()]}`;
}

function getWeekDate(date) {
  const newDate = new Date(date);

  const dayOne = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 7);
  const dayTwo = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 6);
  const dayThree = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 5);
  const dayFour = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 4);
  const dayFive = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 3);
  const daySix = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 2);
  const daySeven = newDate;
  console.log(dayOne.toISOString());

  return {
    1: dayOne,
    2: dayTwo,
    3: dayThree,
    4: dayFour,
    5: dayFive,
    6: daySix,
    7: daySeven
  }
}

const weekDates = getWeekDate(JSON.parse(localStorage.getItem('date')));
console.log(weekDates);

setWeekDay(weekDates, {
  dayOneNode: document.querySelector('#dayOne'),
  dayTwoNode: document.querySelector('#dayTwo'),
  dayThreeNode: document.querySelector('#dayThree'),
  dayFourNode: document.querySelector('#dayFour'),
  dayFiveNode: document.querySelector('#dayFive'),
  daySixNode: document.querySelector('#daySix'),
  daySevenNode: document.querySelector('#daySeven')
})

const publishedDatesArr = data.articles.reduce((acc, item) => {
  acc.push(item.publishedAt);
  return acc;
}, []);

console.log(publishedDatesArr);

// const filteredPublishedDatesArr = publishedDatesArr.reduce((acc, item) => {
//   acc.push(new Date(item).toLocaleDateString());
//   return acc;
// }, []);

// console.log(filteredPublishedDatesArr);

function changeDateFormat(dateArr) {
  const arr = dateArr.reduce((acc, item) => {
    acc.push(new Date(item).toLocaleDateString());
    return acc;
  }, [])
  return arr;
}

const filteredPublishedDatesArr = changeDateFormat(publishedDatesArr);
const filteredWeekDays = changeDateFormat(Object.values(weekDates));
console.log(filteredWeekDays);
console.log(filteredPublishedDatesArr);

function compareDates(weekDay, publishedDatesArr) {
  const num = publishedDatesArr.reduce((acc, item) => {
    if (item == weekDay) {
      acc += 1;
    }
    return acc;
  }, 0);

  return num;
}

const dayOne = compareDates(filteredWeekDays[0], filteredPublishedDatesArr);
console.log(dayOne);
const dayTwo = compareDates(filteredWeekDays[1], filteredPublishedDatesArr);
const dayThree = compareDates(filteredWeekDays[2], filteredPublishedDatesArr);
const dayFour = compareDates(filteredWeekDays[3], filteredPublishedDatesArr);
const dayFive = compareDates(filteredWeekDays[4], filteredPublishedDatesArr);
const daySix = compareDates(filteredWeekDays[7], filteredPublishedDatesArr);
const daySeven = compareDates(filteredWeekDays[6], filteredPublishedDatesArr);

function getPercentNum(totalNum, oneDayNum) {
  const maxPercent = 100;
  const percent = Math.floor((totalNum * oneDayNum) / maxPercent);
  return percent;
}

const dayOnePercent = getPercentNum(data.totalResults, dayOne);
const dayTwoPercent = getPercentNum(data.totalResults, dayTwo);
const dayThreePercent = getPercentNum(data.totalResults, dayThree);
const dayFourPercent = getPercentNum(data.totalResults, dayFour);
const dayFivePercent = getPercentNum(data.totalResults, dayFive);
const daySixPercent = getPercentNum(data.totalResults, daySix);
const daySevenPercent = getPercentNum(data.totalResults, daySeven);

console.log(dayOnePercent, dayTwoPercent, dayThreePercent);

const dayOneSvg = document.querySelector('#mon');
const dayTwoSvg = document.querySelector('#tue');
const dayThreeSvg = document.querySelector('#wed');
const dayFourSvg = document.querySelector('#thu');
const dayFiveSvg = document.querySelector('#fri');
const daySixSvg = document.querySelector('#sat');
const daySevenSvg = document.querySelector('#sun');

dayOneSvg.style.width = `${dayOnePercent}%`;
dayTwoSvg.style.width = `${dayTwoPercent}%`;
dayThreeSvg.style.width = `${dayThreePercent}%`;
dayFourSvg.style.width = `${dayFourPercent}%`;
dayFiveSvg.style.width = `${dayFivePercent}%`;
daySixSvg.style.width = `${daySixPercent}%`;
daySevenSvg.style.width = `${daySevenPercent}%`;
















