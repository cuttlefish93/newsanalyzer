export default class NewsCardList {
  constructor(container) {
    this.container = container;
  }

  addNews(newsCard) {
    this.container.append(newsCard);
  }
}
