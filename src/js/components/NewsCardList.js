export default class NewsCardList {
  constructor(node) {
    this._newsContainer = node;
  }

  _addNewsCard = (newsCard) => {
    this._newsContainer.append(newsCard);
  }

  clearContainer = () => {
    this._newsContainer.textContent = '';
  }

  renderNewsCards = (responseData, createNewsCard) => {
    responseData.forEach((data) => {
      this._addNewsCard(
        createNewsCard({
          source: data.source.name,
          title: data.title,
          description: data.description,
          urlToNews: data.url,
          urlToImage: data.urlToImage,
          publishedDate: data.publishedAt,
        })
      );
    });
  }
}

