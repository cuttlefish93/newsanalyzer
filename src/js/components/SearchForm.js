import BaseComponent from './BaseComponent';

export default class SearchForm extends BaseComponent {
  constructor(formNode, errorMessages) {
    super();
    this.form = formNode;
    this._errorMessages = errorMessages;
    this._submitButton = this.form.querySelector('.button');
  }

  _checkInputValidity = (input) => {
    input.setCustomValidity('');
    input.classList.remove('invalid');

    if (input.validity.valueMissing) {
      input.setCustomValidity(this._errorMessages.empty)
      input.classList.add('invalid');
    }

    if (input.validity.tooShort) {
      input.setCustomValidity(this._errorMessages.wrongLength);
      input.classList.add('invalid');
    }
  }

  _getErrorElement = (input) => input.parentNode.querySelector(`#${input.id}-error`)

  validate = (event) => {
    const errorMessage = this._getErrorElement(event.target);
    this._checkInputValidity(event.target);
    errorMessage.textContent = event.target.validationMessage;
    this._setSubmitButtonState(event.target);
  }

  _setSubmitButtonState = (input) => {
    if (input.validity.valid) {
      this._submitButton.removeAttribute('disabled');
      this._submitButton.classList.remove('disabled');
    } else {
      this._submitButton.setAttribute('disabled', '');
      this._submitButton.classList.add('disabled');
    }
  }

  getInputValue = () => this.form.querySelector('.input').value;

  disable = () => {
    this._submitButton.setAttribute('disabled', '');
    this._submitButton.classList.add('disabled');
    this.form.querySelector('.input').classList.add('disabled');
  }

  enable = () => {
    this._submitButton.removeAttribute('disabled', '');
    this._submitButton.classList.remove('disabled');
    this.form.querySelector('.input').classList.remove('disabled');
  }
}
