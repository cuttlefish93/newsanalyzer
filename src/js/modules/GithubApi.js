export default class GithubApi {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  checkData(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getCommits({ owner, repo }) {
    return fetch(`${this.url}/repos/${owner}/${repo}/commits`, {
      headers: this.headers
    }).then(response => this.checkData(response));
  }
}
