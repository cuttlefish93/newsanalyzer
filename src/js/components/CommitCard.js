export default class CommitCard {
  constructor(template, changeDateFunc) {
    this.template = template;
    this.changeDateFunc = changeDateFunc;
  }

  createCommitCard = ({ commitUrl, commitDate, authorImg, authorName, authorEmail, commitText }) => {
    const cloneTemplate = this.template.content.cloneNode(true);
    this.commitCard = cloneTemplate.querySelector('.commits-slider-card');
    this.commitCardLink = this.commitCard.querySelector('.commits-slider-card__link');
    this.commitCreateDate = this.commitCard.querySelector('.commits-slider-card__create-date');
    this.commitAuthorImg = this.commitCard.querySelector('.commits-slider-card__img');
    this.commitAuthorName = this.commitCard.querySelector('.commits-slider-card__author-name');
    this.commitAuthorEmail = this.commitCard.querySelector('.commits-slider-card__author-email');
    this.commitText = this.commitCard.querySelector('.commits-slider-card__commit-text');
    this.commitCardLink.setAttribute('href', `${commitUrl}`); //возможно потребуется обрезать ссылку для корректного отображения
    this.commitCreateDate.textContent = this.changeDateFormat(commitDate);
    this.commitAuthorImg.setAttribute('src', `${authorImg}`); //возможно потребуется обрезать ссылку для корректного отображения
    this.commitAuthorName.textContent = authorName;
    this.commitAuthorEmail.textContent = authorEmail;
    this.commitText.textContent = commitText;

    return this.commitCard;
  }

  changeDateFormat = (date) => {
    const correctDateFormat = this.changeDateFunc(date);
    return correctDateFormat;
  }
}
