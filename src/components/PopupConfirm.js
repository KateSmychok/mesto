import { Popup } from '../components/Popup.js';

export class PopupConfirm extends Popup {
  constructor({ popupSelector, handleDeleteButtonClick }) {
    super(popupSelector);
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._deleteCardButton = this._popup.querySelector('.button_type_confirm');
  }

  _setEventListeners() {
    super._setEventListeners();
    this._deleteCardButton.addEventListener('click', this._confirmDelete);
  }

  _confirmDelete = () => {
    this._handleDeleteButtonClick();
  }

  open() {
    this._setEventListeners();
    super.open();
  }

}
