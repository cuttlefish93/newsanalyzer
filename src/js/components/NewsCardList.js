export default class NewsCardList {
  constructor(node) {
    this.newsContainer = node;
  }

  addNewsCard = (newsCard) => {
    this.newsContainer.append(newsCard);
  };

  renderNewsCards = (responseData, createNewsCard) => {
    responseData.forEach((data) => {
      this.addNewsCard(
        createNewsCard({
          source: data.source.name,
          title: data.title,
          description: data.description,
          urlToNews: data.url,
          urlToImage: data.urlToImage ? data.urlToImage : './assets/images/author-img.png',
          publishedDate: data.publishedAt,
        })
      );
    });
  };
}

// source, title, description, urlToNews, urlToImage, publishedDate

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
