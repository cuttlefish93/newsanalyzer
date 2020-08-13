export const SEARCH_DAY_INTERVAL = 7;
export const NEWS_API_KEY = "c31a98f429c04417b5c72d0aec9b60a6";
export const NEWS_API_REQUEST_URL = "http://newsapi.org/v2";
export const NEWS_API_PROXY_REQUEST_URL = "https://praktikum.tk/news/v2";
export const GITHUB_API_REQUEST_URL = "https://api.github.com";
export const GITHUB_USER = "camel-bb";
export const GITHUB_REPO = "newsanalyzer";

export const NEWS_API_CONFIG = {
  url: `${NEWS_API_PROXY_REQUEST_URL}`,
  headers: {
    authorization: `${NEWS_API_KEY}`,
    "Content-Type": "application/json",
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
};

export const GITHUB_COMMIT_CARD_TEMPLATE = `
            <li class="commits-slider-card commits-slider__list-item swiper-slide">
              <a href="#" target="_blank" class="link commits-slider-card__link">
                <p class="subtitle commits-slider-card__create-date"></p>
                <div class="commits-slider-card__author">
                  <div class="commits-slider-card__image-box">
                    <img src="" alt="Аватар пользователя на гитхабе" class="commits-slider-card__img">
                  </div>
                  <div class="commits-slider-card__about-author-box">
                    <p class="subtitle commits-slider-card__author-name"></p>
                    <p class="subtitle commits-slider-card__author-email"></p>
                  </div>
                </div>
                <p class="subtitle commits-slider-card__commit-text"></p>
              </a>
            </li>
`;

export const NEWS_CARD_TEMPLATE = `
              <li class="news-card">
                <a href="" target="_blank" class="link news-card__link">
                  <img src="" alt="Обложка новости" class="news-card__img">
                  <div class="news-card__about">
                    <p class="subtitle news-card__create-date"></p>
                    <h4 class="title news-card__name"></h4>
                    <p class="subtitle news-card__description"></p>
                    <p class="subtitle news-card__source"></p>
                  </div>
                </a>
              </li>
`;
