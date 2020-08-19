export default class GithubApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkData(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getCommits({ owner, repo }) {
    return fetch(`${this._url}/repos/${owner}/${repo}/commits`, {
      headers: this._headers
    }).then(response => this._checkData(response));
  }
}
