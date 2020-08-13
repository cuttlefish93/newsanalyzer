export default class NewsApi {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
    this.endpoint = config.endpoint;
  }

  checkData(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getNews(keyword) {
    return fetch(`${this.url}/${this.endpoint}?q=${keyword}&from=${dateFrom}&to=${dateTo}&apiKey=${this.headers.authorization}`, {
      headers: this.headers
    }).then(response => this.checkData(response));
  }
}
