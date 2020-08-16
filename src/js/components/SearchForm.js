import BaseComponent from './BaseComponent';

export default class SearchForm extends BaseComponent {
  constructor(handlers, formNode, errorMessages) {
    super(handlers);
    this.form = formNode;
    this.errorMessages = errorMessages;
    this.submitButton = this.form.querySelector('.button');
  }

  checkInputValidity = (input) => {
    input.setCustomValidity('');
    input.classList.remove('invalid');

    if (input.validity.valueMissing) {
      input.setCustomValidity(this.errorMessages.empty)
      input.classList.add('invalid');
    }

    if (input.validity.tooShort) {
      input.setCustomValidity(this.errorMessages.wrongLength);
      input.classList.add('invalid');
    }
  }

  getErrorElement = (input) => input.parentNode.querySelector(`#${input.id}-error`)

  validate = (event) => {
    const errorMessage = this.getErrorElement(event.target);
    this.checkInputValidity(event.target);
    errorMessage.textContent = event.target.validationMessage;
    this.setSubmitButtonState(event.target);
  }

  setSubmitButtonState = (input) => {
    if (input.validity.valid) {
      this.submitButton.removeAttribute('disabled');
      this.submitButton.classList.remove('disabled');
    } else {
      this.submitButton.setAttribute('disabled', '');
      this.submitButton.classList.add('disabled');
    }
  }

  render = () => {
    this.setHandlers(this.form.querySelector('.input'), this.handlers.input, this.validate);
  }

  getInputValue = () => this.form.querySelector('.input').value;

  disableOnSubmit = () => {
    this.submitButton.setAttribute('disabled', '');
    this.submitButton.classList.add('disabled');
    this.form.querySelector('.input').classList.add('disabled');
  }

  disableFalse = () => {
    this.submitButton.removeAttribute('disabled', '');
    this.submitButton.classList.remove('disabled');
    this.form.querySelector('.input').classList.remove('disabled');
  }
}
