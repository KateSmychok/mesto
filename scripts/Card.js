import { showPopup } from './index.js';

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.place').cloneNode(true);
    return cardElement;
  }

  _likeCard() {
    const buttonLike = this._element.querySelector('.button_type_like');
    buttonLike.classList.toggle('button_type_like_active');
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _showFullImage() {
    const popupFullImage = document.querySelector('.popup_type_fullImage');
    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption');
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupCaption.textContent = this._name;
    showPopup(popupFullImage);
  }

  _setEventListeners() {
    this._element.querySelector('.button_type_like').addEventListener('click', () => {
      this._likeCard()
    });

    this._element.querySelector('.button_type_delete').addEventListener('click', () => {
      this._deleteCard()
    });

    this._element.querySelector('.place__image').addEventListener('click', () => {
      this._showFullImage();
    });
  }

  createCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.place__image').src = this._link;
    this._element.querySelector('.place__image').alt = this._name;
    this._element.querySelector('.place__title').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}

