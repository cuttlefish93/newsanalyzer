import './analytics.css';
import * as constants from './../../js/constants/constants';
import DataStorage from './../../js/modules/DataStorage';
import Statistics from './../../js/components/Statistics';


// ПЕРЕМЕННЫЕ
const searchKeyword = document.querySelector('.search-keyword-data__keyword');
const totalResultsNum = document.querySelector('#common-num');
const keyInTitlesNum = document.querySelector('#num-in-title');
const searchMonth = document.querySelector('.keyword-analytics__month');

const daysNodes = {
  dayOneNode: document.querySelector('#dayOne'),
  dayTwoNode: document.querySelector('#dayTwo'),
  dayThreeNode: document.querySelector('#dayThree'),
  dayFourNode: document.querySelector('#dayFour'),
  dayFiveNode: document.querySelector('#dayFive'),
  daySixNode: document.querySelector('#daySix'),
  daySevenNode: document.querySelector('#daySeven')
}

const svgLinesNodes = {
  dayOneSvg: document.querySelector('#mon'),
  dayTwoSvg: document.querySelector('#tue'),
  dayThreeSvg: document.querySelector('#wed'),
  dayFourSvg: document.querySelector('#thu'),
  dayFiveSvg: document.querySelector('#fri'),
  daySixSvg: document.querySelector('#sat'),
  daySevenSvg: document.querySelector('#sun')
}

const widthInPercentNums = {
  numOne: document.querySelector('#mon-width-num'),
  numTwo: document.querySelector('#tue-width-num'),
  numThree: document.querySelector('#wed-width-num'),
  numFour: document.querySelector('#thu-width-num'),
  numFive: document.querySelector('#fri-width-num'),
  numSix: document.querySelector('#sat-width-num'),
  numSeven: document.querySelector('#sun-width-num'),
}


// ИНСТАНСЫ КЛАССОВ
const dataStorage = new DataStorage();
const statistics = new Statistics(daysNodes);


// ФУНКЦИИ

// функция для расчета кол-ва вхождений ключевого слова в заголовках
function searchKeyInTitles(dataArr, key) {
  const regexp = new RegExp(`${key}`, 'i');

  const result = dataArr.reduce((counter, item) => {
    let isMatch = regexp.test(item.title);
    if (isMatch) {
      counter += 1;
    }
    return counter;
  }, 0);

  return result;
}

// функция для вывода промежутка дат на страницу
function setWeekDay(dates, days, daysNodeObj) {
  const weekArr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  daysNodeObj.dayOneNode.textContent = `${dates[1]}, ${weekArr[days[1]]}`;
  daysNodeObj.dayTwoNode.textContent = `${dates[2]}, ${weekArr[days[2]]}`;
  daysNodeObj.dayThreeNode.textContent = `${dates[3]}, ${weekArr[days[3]]}`;
  daysNodeObj.dayFourNode.textContent = `${dates[4]}, ${weekArr[days[4]]}`;
  daysNodeObj.dayFiveNode.textContent = `${dates[5]}, ${weekArr[days[5]]}`;
  daysNodeObj.daySixNode.textContent = `${dates[6]}, ${weekArr[days[6]]}`;
  daysNodeObj.daySevenNode.textContent = `${dates[7]}, ${weekArr[days[7]]}`;
}

// функция для проверки кол-ва вхождений даты в массиве дат опубликованных новостей
function compareDates(date, datesArr) {
  const num = datesArr.reduce((acc, item) => {
    if (item == date) {
      acc += 1;
    }
    return acc;
  }, 0);

  return num;
}

// функция для получения процента опубликованных новостей за один день от общего кол-ва
function getPercentNum(totalNum, oneDayNum) {
  const maxPercent = 100;
  const percent = Math.round((totalNum * oneDayNum) / maxPercent);
  return percent;
}

// функция для вывода на страницу месяца поискового промежутка
function getMonth(node, monthNum) {
  const monthArr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  node.textContent = `(${monthArr[monthNum]})`;
}


const newsData = dataStorage.getItem(constants.KEYS_FOR_STORAGE.news);
const keyword = dataStorage.getItem(constants.KEYS_FOR_STORAGE.key);
const fullDates = dataStorage.getItem(constants.KEYS_FOR_STORAGE.datesData).fullDates;
const weekDays = dataStorage.getItem(constants.KEYS_FOR_STORAGE.datesData).days;
const weekDates = dataStorage.getItem(constants.KEYS_FOR_STORAGE.datesData).dates;
const month = dataStorage.getItem(constants.KEYS_FOR_STORAGE.datesData).month;


searchKeyword.textContent = keyword;
totalResultsNum.textContent = newsData.totalResults;
keyInTitlesNum.textContent = searchKeyInTitles(newsData.articles, keyword);
getMonth(searchMonth, month);

const publishedDatesArr = newsData.articles.reduce((acc, item) => {
  const regexp = /^\d{4}-\d{2}-\d{2}/g;
  acc.push(item.publishedAt.match(regexp)[0]);
  return acc;
}, []);

statistics.setWeekDay(weekDates, weekDays, setWeekDay);
statistics.getNewsNumInDay(fullDates, publishedDatesArr, compareDates);
statistics.getPercentNumInDay(newsData.totalResults, getPercentNum);
statistics.setDaysLinesWidth(svgLinesNodes);
statistics.setWidthNums(widthInPercentNums);































