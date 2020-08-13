export default class SearchInput {
  constructor(formNode, errorMessages) {
    this.form = formNode;
    this.errorMessages = errorMessages;
    this.submitButton = this.form.querySelector('.button');
    this.formElements = [...this.form.elements];
    this.setListeners();
  }

  checkInputValidity = (input) => {
    input.setCustomValidity('');

    if (input.validity.valueMissing) {
      input.setCustomValidity(this.errorMessages.empty)
    }
  }

  getErrorElement = (input) => input.parentNode.querySelector(`#${input.id}-error`)

  setErrorMessage = (event) => {
    const errorMessage = this.getErrorElement(event.target);
    this.checkInputValidity(event.target);
    errorMessage.textContent = event.target.validationMessage;
  }

  setSubmitButtonState = () => {
    if (this.form.checkValidity()) {
      this.submitButton.removeAttribute('disabled');
      this.submitButton.classList.remove('disabled');
    } else {
      this.submitButton.setAttribute('disabled', '');
      this.submitButton.classList.add('disabled');
    }
  }

  resetForm = () => {
    this.form.reset();
    this.setSubmitButtonState();
    this.formElements.forEach(element => {
      if (
        element.type !== "submit" &&
        element.type !== "button" &&
        element.tagName !== "BUTTON"
      ) {
        const errorMessage = this.getErrorElement(element);
        errorMessage.textContent = "";
      }
    });
  }

  setListeners() {
    this.form.addEventListener('input', this.setErrorMessage, true);
    this.form.addEventListener('input', this.setSubmitButtonState, true);
    this.form.addEventListener('blur', this.resetForm, true);
  }
}
