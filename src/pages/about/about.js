import './about.css';
import 'swiper/swiper-bundle.css';
import swiper from 'swiper/bundle';
import CommitCard from './../../js/components/CommitCard';
import CommitCardList from './../../js/components/CommitCardList';
import GithubApi from './../../js/modules/GithubApi';
import * as constants from './../../js/constants/constants';
import convertDateFormat from './../../js/utils/convertDateFormat';

const commitList = document.querySelector('.commits-slider__list');
const commitCardTemplate = document.querySelector('.commit-card-template');
const errorResponseSection = document.querySelector('.error-response');
const errorResponseSectionTitle = document.querySelector('.error-response__title');

const commitCardList = new CommitCardList(commitList);
const githubApi = new GithubApi(constants.GITHUB_API_CONFIG);
const createCommitCard = (...args) => new CommitCard(commitCardTemplate, convertDateFormat).createCommitCard(...args);

const mySwiper = new swiper('.swiper-container', {
  init: false,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerGroup: 3,
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: true,
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
      spaceBetween: 16
    }
  }
});

githubApi.getCommits({ owner: constants.GITHUB_USER, repo: constants.GITHUB_REPO })
  .then(response => response.slice(0, 21))
  .then(response => commitCardList.renderCommitCards(response, createCommitCard))
  .then(response => mySwiper.init())
  .catch(err => {
    commitList.style.display = 'none';
    errorResponseSection.style.display = 'block';
    errorResponseSectionTitle.textContent = err;
    document.querySelector('.commits-section').style.paddingBottom = '0px';
    document.querySelector('.swiper-pagination').style.display = 'none';
  });








