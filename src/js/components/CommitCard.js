export default class CommitCard {
  constructor(template, changeDateFunc) {
    this._template = template;
    this._changeDateFunc = changeDateFunc;
  }

  createCommitCard = ({ commitUrl, commitDate, authorImg, authorName, authorEmail, commitText }) => {
    const cloneTemplate = this._template.content.cloneNode(true);
    this._commitCard = cloneTemplate.querySelector('.commits-slider-card');
    this._commitCardLink = this._commitCard.querySelector('.commits-slider-card__link');
    this._commitCreateDate = this._commitCard.querySelector('.commits-slider-card__create-date');
    this._commitAuthorImg = this._commitCard.querySelector('.commits-slider-card__img');
    this._commitAuthorName = this._commitCard.querySelector('.commits-slider-card__author-name');
    this._commitAuthorEmail = this._commitCard.querySelector('.commits-slider-card__author-email');
    this._commitText = this._commitCard.querySelector('.commits-slider-card__commit-text');
    this._commitCardLink.setAttribute('href', `${commitUrl}`);
    this._commitCreateDate.textContent = this._changeDateFormat(commitDate);
    this._commitAuthorImg.setAttribute('src', `${authorImg}`);
    this._checkImgLoad(this._commitAuthorImg);
    this._commitAuthorName.textContent = authorName;
    this._commitAuthorEmail.textContent = this._checkEmail(authorEmail);
    this._commitText.textContent = commitText;

    return this._commitCard;
  }

  _changeDateFormat = (date) => {
    const correctDateFormat = this._changeDateFunc(date);
    return correctDateFormat;
  }

  _checkImgLoad = (img) => {
    img.onerror = function () {
      img.setAttribute('src', './assets/images/author-img.png')
    }
  }

  _checkEmail(email) {
    const regexp = /^\d{0,8}\+?/gi;
    const newEmail = email.replace(regexp, '');
    return newEmail;
  }
}
