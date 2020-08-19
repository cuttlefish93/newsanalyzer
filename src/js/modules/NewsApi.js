export default class NewsApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
    this._endpoint = config.endpoint;
  }

  _checkData(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getNews(keyword, { dateTo, dateFrom }) {
    return fetch(`${this._url}/${this._endpoint}?q=${keyword}&from=${dateFrom}&to=${dateTo}&apiKey=${this._headers.authorization}`, {
      headers: this._headers
    }).then(response => this._checkData(response));
  }
}
