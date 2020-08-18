import './index.css';
import * as constants from './js/constants/constants';
import createDateForRequest from './js/utils/createDateForRequest';
import convertDateFormat from './js/utils/convertDateFormat';
import showElem from './js/utils/showElem';
import hideElem from './js/utils/hideElem';
import SearchForm from './js/components/SearchForm';
import NewsApi from './js/modules/NewsApi';
import NewsCardList from './js/components/NewsCardList';
import NewsCard from './js/components/NewsCard';
import DataStorage from './js/modules/DataStorage';
import LoadMoreButton from './js/components/LoadMoreButton';


// ПЕРЕМЕННЫЕ
const preloader = document.querySelector('.preloader');
const failedSearchSection = document.querySelector('.failed-search');
const errorResponseSection = document.querySelector('.error-response');
const errorResponseSectionTitle = document.querySelector('.error-response__title');
const searchResultsSection = document.querySelector('.search-results');
const newsList = document.querySelector('.news-list');
const newsCardTemplate = document.querySelector('.news-card-template');
const searchInput = document.querySelector('.search-section__name-input');


// ФУНКЦИИ

// функция для создания карточки новости
const createNewsCard = (...args) => new NewsCard(newsCardTemplate, convertDateFormat).createCard(...args);

// функция для рендеринга карточек в dom
const renderNewsCards = (...args) => newsCardList.renderNewsCards(...args);

// функция для проверки количества новостей при запросе / для отображения соответствующего блока
function checkNewsSum(dataArr, key) {
  if (dataArr.length === 0) {
    searchInput.value = key;
    hideElem(searchResultsSection);
    showElem(failedSearchSection);
    return;
  }
}

// функция для отрисовки 3х карточек
function loadCards() {
  const loadMoreButton = document.querySelector('.search-results__add-news-btn');
  showElem(loadMoreButton);

  const newsCardsArr = Array.from(document.querySelectorAll('.news-card'));
  const filteredArr = newsCardsArr.filter(card => card.style.display === '');

  if (filteredArr.length <= 3) {
    hideElem(loadMoreButton);
  }

  const slicedArr = filteredArr.slice(0, 3);
  slicedArr.forEach(card => showElem(card));
}


// ИНСТАНСЫ КЛАССОВ
const dataStorage = new DataStorage();
const newsApi = new NewsApi(constants.NEWS_API_CONFIG);
const searchForm = new SearchForm(document.querySelector('.search-section__form'), constants.FORM_ERROR_MESSAGES);
const newsCardList = new NewsCardList(newsList);
const loadMoreNewsBtn = new LoadMoreButton(document.querySelector('.search-results__add-news-btn'));


// ВЫЗОВЫ МЕТОДОВ
searchForm.setEvents([{ selector: searchInput, event: 'input', callback: searchForm.validate }]);

loadMoreNewsBtn.setEvents([{ selector: loadMoreNewsBtn.button, event: 'click', callback: loadCards }]);



// СОБЫТИЯ
searchForm.form.addEventListener('submit', (event) => {
  event.preventDefault();
  searchForm.disable();
  hideElem(searchResultsSection);
  hideElem(errorResponseSection);
  hideElem(failedSearchSection);
  showElem(preloader);
  newsCardList.clearContainer();
  dataStorage.clearStorage();

  const keyword = searchForm.getInputValue();

  const datesObj = createDateForRequest();

  newsApi.getNews(keyword, { dateTo: datesObj.fullDates[7], dateFrom: datesObj.fullDates[1] })
    .then(response => {
      dataStorage.setItem(constants.KEYS_FOR_STORAGE.key, keyword);
      dataStorage.setItem(constants.KEYS_FOR_STORAGE.news, response);
      dataStorage.setItem(constants.KEYS_FOR_STORAGE.datesData, datesObj);

      checkNewsSum(dataStorage.getItem(constants.KEYS_FOR_STORAGE.news).articles, dataStorage.getItem(constants.KEYS_FOR_STORAGE.key));
      renderNewsCards(dataStorage.getItem(constants.KEYS_FOR_STORAGE.news).articles, createNewsCard);
      loadCards();
      showElem(searchResultsSection);
    })
    .catch(err => {
      errorResponseSectionTitle.textContent = err;
      showElem(errorResponseSection);
    })
    .finally(() => {
      searchForm.enable();
      hideElem(preloader);
    })
})

document.addEventListener('DOMContentLoaded', () => {
  if (dataStorage.getItem(constants.KEYS_FOR_STORAGE.news) !== null) {
    checkNewsSum(dataStorage.getItem(constants.KEYS_FOR_STORAGE.news).articles, constants.KEYS_FOR_STORAGE.key);
    searchInput.value = dataStorage.getItem(constants.KEYS_FOR_STORAGE.key);
    renderNewsCards(dataStorage.getItem(constants.KEYS_FOR_STORAGE.news).articles, createNewsCard);
    loadCards();
    showElem(searchResultsSection);
  }
})

























