import './about.css';
import 'swiper/swiper-bundle.css';
import swiper from 'swiper/bundle';
import CommitCard from './../../js/components/CommitCard';
import CommitCardList from './../../js/components/CommitCardList';
import GithubApi from './../../js/modules/GithubApi';
import * as constants from './../../js/constants/constants';
import convertDateFormat from './../../js/utils/convertDateFormat';
import showELem from './../../js/utils/showElem';
import hideElem from './../../js/utils/hideElem';


// ПЕРЕМЕННЫЕ
const commmitSection = document.querySelector('.commits-section');
const commitList = document.querySelector('.commits-slider__list');
const commitCardTemplate = document.querySelector('.commit-card-template');
const errorResponseSection = document.querySelector('.error-response');
const errorResponseSectionTitle = document.querySelector('.error-response__title');


// ИНСТАНСЫ КЛАССОВ
const commitCardList = new CommitCardList(commitList);
const githubApi = new GithubApi(constants.GITHUB_API_CONFIG);

const mySwiper = new swiper('.swiper-container', {
  init: false,
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 8,
    },
    1024: {
      spaceBetween: 16,
    }
  }
})


// ФУНКЦИИ

// функция для создания карточки слайдера
const createCommitCard = (...args) => new CommitCard(commitCardTemplate, convertDateFormat).createCommitCard(...args);


// ВЫЗОВЫ МЕТОДОВ
githubApi.getCommits({ owner: constants.GITHUB_USER, repo: constants.GITHUB_REPO })
  .then(response => response.slice(0, 21))
  .then(response => commitCardList.renderCommitCards(response, createCommitCard))
  .then(response => mySwiper.init())
  .catch(err => {
    hideElem(commmitSection);
    showELem(errorResponseSection);
    errorResponseSectionTitle.textContent = err;
  })








