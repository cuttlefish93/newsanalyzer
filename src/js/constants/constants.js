export const SEARCH_DAY_INTERVAL = 7;
export const NEWS_API_KEY = "c31a98f429c04417b5c72d0aec9b60a6";
export const NEWS_API_REQUEST_URL = "http://newsapi.org/v2";
export const NEWS_API_PROXY_REQUEST_URL = "https://praktikum.tk/news/v2";
export const GITHUB_API_REQUEST_URL = "https://api.github.com";
export const GITHUB_USER = "camel-bb";
export const GITHUB_REPO = "newsanalyzer";

export const NEWS_API_CONFIG = {
  url: `${NEWS_API_REQUEST_URL}`,
  headers: {
    authorization: `${NEWS_API_KEY}`,
  },
  endpoint: "everything",
};

export const GITHUB_API_CONFIG = {
  url: `${GITHUB_API_REQUEST_URL}`,
  headers: {
    accept: "application/vnd.github.v3+json",
    "Content-Type": "application/json",
  },
};

export const FORM_ERROR_MESSAGES = {
  empty: "Это поле обязательно к заполнению",
  wrongLength: "Рекомендуемая длина ключевого слова от 2х символов"
};

export const HANDLERS = {
  input: 'input',
  submit: 'submit',
  click: 'click'
}



