export default class NewsCard {
  constructor(template) {
    this.template = template;
  }

  createCard = (newsData) => {
    this.cloneTemplate = this.template.content.cloneNode(true);
    this.newsCard = this.cloneTemplate.querySelector('.news-card');
    this.newsSourceLink = this.newsCard.querySelector('.news-card__link');
    this.newsImage = this.newsCard.querySelector('.news-card__img');
    this.newsCreateDate = this.newsCard.querySelector('.news-card__create-date');
    this.newsTitle = this.newsCard.querySelector('.news-card__name');
    this.newsDescription = this.newsCard.querySelector('.news-card__description');
    this.newsCardSourceName = this.newsCard.querySelector('.news-card__source');
    this.newsCardSourceName.textContent = newsData.source.name;
    this.newsTitle.textContent = newsData.title;
    this.newsDescription = newsData.description;
    this.newsSourceLink.setAttribute('href', `${newsData.url}`);
    this.newsImage.setAttribute('src', `${newsData.urlToImage}`);
    this.newsCreateDate.textContent = newsData.publishedAt;
  }
}

// {
//             "source": {
//                 "id": null,
//                 "name": "Vesti.ru"
//             },
//             "author": null,
//             "title": "Вести в 20:00. Спорт, отдых, лечение, экскурсии: Карачаево-Черкесия встречает туристов",
//             "description": "Спорт, отдых, лечение, экскурсии и конные прогулки, восхождение к вершинам и природа, какой не сыщешь в других краях. Все это радушно предлагает гостям Карачаево-Черкесии. Со снятием ограничений там невероятный наплыв туристов. И всем хватает места и впечатле…",
//             "url": "https://www.vesti.ru/video/2211701",
//             "urlToImage": "https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/299/539/0.jpg",
//             "publishedAt": "2020-08-06T17:40:00Z",
//             "content": ". , \r\n Ctrl+Enter."
//         },
