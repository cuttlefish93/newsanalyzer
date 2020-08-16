import './index.css';
import * as constants from './js/constants/constants';
import createDateForRequest from './js/utils/createDateForRequest';
import convertDateFormat from './js/utils/convertDateFormat';
import BaseComponent from './js/components/BaseComponent';
import SearchForm from './js/components/SearchForm';
import NewsApi from './js/modules/NewsApi';
import NewsCardList from './js/components/NewsCardList';
import NewsCard from './js/components/NewsCard';
import DataStorage from './js/modules/DataStorage';

const searchSectionForm = document.querySelector('.search-section__form');
const preloader = document.querySelector('.preloader');
const failedSearchSection = document.querySelector('.failed-search');
const errorResponseSection = document.querySelector('.error-response');
const searchResultsSection = document.querySelector('.search-results');
const newsList = document.querySelector('.news-list');
const loadMoreNewsBtn = document.querySelector('.search-results__add-news-btn');
const newsCardTemplate = document.querySelector('.news-card-template');
const searchInput = document.querySelector('.search-section__name-input');

const dataStorage = new DataStorage();
const newsApi = new NewsApi(constants.NEWS_API_CONFIG);
const searchForm = new SearchForm(constants.HANDLERS, searchSectionForm, constants.FORM_ERROR_MESSAGES);
searchForm.render();
const newsCardList = new NewsCardList(newsList);
const createNewsCard = (...args) => new NewsCard(newsCardTemplate, convertDateFormat).createCard(...args);

searchForm.form.addEventListener('submit', (event) => {
  event.preventDefault();
  searchForm.disableOnSubmit();
  preloader.style.display = 'block';
  newsList.innerHTML = '';
  searchResultsSection.style.display = 'none';
  localStorage.clear();

  const keyword = searchForm.getInputValue();

  newsApi.getNews(keyword, createDateForRequest, constants.SEARCH_DAY_INTERVAL)
    .then(response => {
      // console.log(response);
      localStorage.setItem('keyword', keyword);
      localStorage.setItem('news', dataStorage.dataToJSON(response));
      localStorage.setItem('date', dataStorage.dataToJSON(new Date()));

      searchForm.disableFalse();
      preloader.style.display = 'none';
      searchResultsSection.style.display = 'block';

      const newsData = dataStorage.dataFromJSON(localStorage.getItem('news'));
      const newsArr = newsData.articles;
      const croppedNewsArr = newsArr.slice(0, 3);
      newsCardList.renderNewsCards(croppedNewsArr, createNewsCard);

    })
})

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('keyword') && localStorage.getItem('news')) {
    searchInput.value = localStorage.getItem('keyword');
    const newsData = dataStorage.dataFromJSON(localStorage.getItem('news'));
      const newsArr = newsData.articles;
      // const croppedNewsArr = newsArr.slice(0, 3);
    newsCardList.renderNewsCards(newsArr, createNewsCard);
    const newsCardsNodeList = document.querySelectorAll('.news-card');
    const croppedArr = Array.from(newsCardsNodeList).slice(0, 3);
    croppedArr.forEach(card => card.style.display = 'block');
    searchResultsSection.style.display = 'block';
  }
})

loadMoreNewsBtn.addEventListener('click', () => {
  const newsCardsNodeList = document.querySelectorAll('.news-card');
  // const newsCardsData = JSON.parse(localStorage.getItem('news')).articles;
  const newsCardArr = Array.from(newsCardsNodeList);
  const filteredArr = newsCardArr.filter(card => card.style.display === '');
  if (filteredArr.length <= 3) {
    loadMoreNewsBtn.style.display = 'none';
  }
  // console.log(filteredArr);
  // newsCardArr.forEach(card => console.log(card.style.display));
  const newArr = filteredArr.slice(0, 3);
  newArr.forEach(card => card.style.display = 'block');




})






















// todo: изменить юрл ссылки для карты коммита
// todo: настроить стили для блока с ошибками формы
// todo: проверить стили новостных карточек

