export default class Statistics {
  constructor(daysObj) {
    this._daysNodes = daysObj;
    this._newsNum = null;
    this._newsPercent = null;
  }

  // рендерит на страницу недельный промежуток дат по запросу
  setWeekDay = (datesObj, daysObj, callback) => {
    callback(datesObj, daysObj, this._daysNodes);
  }

  // получает кол-во новостей по каждому дню отдельно
  getNewsNumInDay = (datesObj, publishedDatesArr, callback) => {
    this._newsNum = {
      dayOne: callback(datesObj[1], publishedDatesArr),
      dayTwo: callback(datesObj[2], publishedDatesArr),
      dayThree: callback(datesObj[3], publishedDatesArr),
      dayFour: callback(datesObj[4], publishedDatesArr),
      dayFive: callback(datesObj[5], publishedDatesArr),
      daySix: callback(datesObj[6], publishedDatesArr),
      daySeven: callback(datesObj[7], publishedDatesArr)
    }
  }

  // получает процент новостей по каждому дню от общего кол-ва новостей
  getPercentNumInDay = (totalNum, callback) => {
    this._newsPercent = {
      dayOnePercent: callback(totalNum, this._newsNum.dayOne),
      dayTwoPercent: callback(totalNum, this._newsNum.dayTwo),
      dayThreePercent: callback(totalNum, this._newsNum.dayThree),
      dayFourPercent: callback(totalNum, this._newsNum.dayFour),
      dayFivePercent: callback(totalNum, this._newsNum.dayFive),
      daySixPercent: callback(totalNum, this._newsNum.daySix),
      daySevenPercent: callback(totalNum, this._newsNum.daySeven)
    }
  }

  // устанавливает ширину каждого элемента, отвечающего за отображение кол-ва новостей по каждому дню в %
  setDaysLinesWidth = (linesObj) => {
    this._setWidth(linesObj.dayOneSvg, this._newsPercent.dayOnePercent);
    this._setWidth(linesObj.dayTwoSvg, this._newsPercent.dayTwoPercent);
    this._setWidth(linesObj.dayThreeSvg, this._newsPercent.dayThreePercent);
    this._setWidth(linesObj.dayFourSvg, this._newsPercent.dayFourPercent);
    this._setWidth(linesObj.dayFiveSvg, this._newsPercent.dayFivePercent);
    this._setWidth(linesObj.daySixSvg, this._newsPercent.daySixPercent);
    this._setWidth(linesObj.daySevenSvg, this._newsPercent.daySevenPercent);
  }

  // рендерит на страницу цифры в % по каждому дню отдельно
  setWidthNums = (numsObj) => {
    this._setWidthNum(numsObj.numOne, this._newsPercent.dayOnePercent);
    this._setWidthNum(numsObj.numTwo, this._newsPercent.dayTwoPercent);
    this._setWidthNum(numsObj.numThree, this._newsPercent.dayThreePercent);
    this._setWidthNum(numsObj.numFour, this._newsPercent.dayFourPercent);
    this._setWidthNum(numsObj.numFive, this._newsPercent.dayFivePercent);
    this._setWidthNum(numsObj.numSix, this._newsPercent.daySixPercent);
    this._setWidthNum(numsObj.numSeven, this._newsPercent.daySevenPercent);
  }

  _setWidth = (node, width) => {
    node.style.width = `${width}%`;
  }

  _setWidthNum = (node, num) => {
    node.textContent = num;
  }
}

