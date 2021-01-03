export class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._config = config;
    this._inputList = Array.from(form.querySelectorAll(config.inputSelector));
    this._submitButton = form.querySelector(config.submitButtonSelector);
  }

  _showInputError(input) {
    input.classList.add(this._config.inputErrorClass);
    document.querySelector(`#${input.id}-error`).textContent = input.validationMessage;
  };

  _hideInputError(input) {
    input.classList.remove(this._config.inputErrorClass);
    document.querySelector(`#${input.id}-error`).textContent = '';
  };

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._config.inactiveButtonClass);
    } else {
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
    }
  };

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  };

  removeErrors() {
    this._inputList.forEach((input) => {
      this._hideInputError(input)
    })
  }

  enableButton() {
    this._submitButton.classList.remove(this._config.inactiveButtonClass);
  }

  disableButton() {
    this._submitButton.classList.add(this._config.inactiveButtonClass);
  }

}


