import './index.css';
import * as constants from './js/constants/constants';
import SearchInput from './js/components/SearchInput';
import NewsApi from './js/modules/NewsApi';

const searchForm = document.querySelector('.search-section__form');
const preloader = document.querySelector('.preloader');
const failedSearch = document.querySelector('.failed-search');
const searchResults = document.querySelector('.search-results');
const newsList = document.querySelector('.news-list');
const loadMoreNewsBtn = document.querySelector('.search-results__add-news-btn');

const searchInput = new SearchInput(searchForm, constants.FORM_ERROR_MESSAGES);
const newsApi = new NewsApi(constants.NEWS_API_CONFIG);

const getNewsRequest = () => {

}
