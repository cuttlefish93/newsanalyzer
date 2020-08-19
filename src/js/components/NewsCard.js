export default class NewsCard {
  constructor(template, changeDateFunc) {
    this._template = template;
    this._changeDateFunc = changeDateFunc;
  }

  createCard = ({ source, title, description, urlToNews, urlToImage, publishedDate }) => {
    const cloneTemplate = this._template.content.cloneNode(true);
    this._newsCard = cloneTemplate.querySelector('.news-card');
    this._newsSourceLink = this._newsCard.querySelector('.news-card__link');
    this._newsImage = this._newsCard.querySelector('.news-card__img');
    this._newsCreateDate = this._newsCard.querySelector('.news-card__create-date');
    this._newsTitle = this._newsCard.querySelector('.news-card__name');
    this._newsDescription = this._newsCard.querySelector('.news-card__description');
    this._newsCardSourceName = this._newsCard.querySelector('.news-card__source');
    this._newsCardSourceName.textContent = source;
    this._newsTitle.textContent = title;
    this._newsDescription.textContent = description;
    this._newsSourceLink.setAttribute('href', `${urlToNews}`);
    this._newsImage.setAttribute('src', `${urlToImage}`);
    this._checkImgLoad(this._newsImage);
    this._newsCreateDate.textContent = this._changeDateFormat(publishedDate);

    return this._newsCard;
  }

  _changeDateFormat = (date) => {
    const correctDateFormat = this._changeDateFunc(date);
    return correctDateFormat;
  }

  _checkImgLoad = (img) => {
    img.onerror = function () {
      img.setAttribute('src', './assets/images/card-img-example.jpg');
    }
  }
}


