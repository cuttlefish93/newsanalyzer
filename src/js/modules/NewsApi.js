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

  getNews(keyword, createDateFunc, dateInterval) {
    const date = createDateFunc(dateInterval);
    return fetch(`${this.url}/${this.endpoint}?q=${keyword}&from=${date.from}&to=${date.to}&apiKey=${this.headers.authorization}`, {
      headers: this.headers
    }).then(response => this.checkData(response));
  }
}
