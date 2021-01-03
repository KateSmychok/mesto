export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

  _setEventListeners() {
    this._element.querySelector('.button_type_like').addEventListener('click', () => {
      this._likeCard()
    });

    this._element.querySelector('.button_type_delete').addEventListener('click', () => {
      this._deleteCard()
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.place__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle = this._element.querySelector('.place__title');
    this._cardTitle.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}

