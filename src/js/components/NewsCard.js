export default class NewsCard {
  constructor(template, changeDateFunc) {
    this.template = template;
    this.changeDateFunc = changeDateFunc;
  }

  createCard = ({ source, title, description, urlToNews, urlToImage, publishedDate }) => {
    this.cloneTemplate = this.template.content.cloneNode(true);
    this.newsCard = this.cloneTemplate.querySelector('.news-card');
    this.newsSourceLink = this.newsCard.querySelector('.news-card__link');
    this.newsImage = this.newsCard.querySelector('.news-card__img');
    this.newsCreateDate = this.newsCard.querySelector('.news-card__create-date');
    this.newsTitle = this.newsCard.querySelector('.news-card__name');
    this.newsDescription = this.newsCard.querySelector('.news-card__description');
    this.newsCardSourceName = this.newsCard.querySelector('.news-card__source');
    this.newsCardSourceName.textContent = source;
    this.newsTitle.textContent = title;
    this.newsDescription.textContent = description;
    this.newsSourceLink.setAttribute('href', `${urlToNews}`);
    this.newsImage.setAttribute('src', `${urlToImage}`);
    this.newsCreateDate.textContent = this.changeDateFormat(publishedDate);

    return this.newsCard;
  }

  changeDateFormat = (date) => {
    const correctDateFormat = this.changeDateFunc(date);
    return correctDateFormat;
  }
}


