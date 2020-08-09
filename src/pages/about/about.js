import './about.css';
import swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const mySwiper = new swiper('.swiper-container', {
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
      spaceBetween: 16
    }
  }
});
