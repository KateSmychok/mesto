export class Card {
  constructor({data, cardSelector, userId, handlers}) {
    this._title = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._cardId = data._id;
    this._cardSelector = cardSelector;
    this._userId = userId;
    this._handleCardClick = handlers.handleCardClick;
    this._handleLikeClick = handlers.handleLikeClick;
    this._handleDeleteIconClick = handlers.handleDeleteIconClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.place').cloneNode(true);
    return cardElement;
  }

  _toggleLike() {
    this._handleLikeClick(this._cardId, this.isLiked)
      .then((data) => {
        this._buttonLike.classList.toggle('button_type_like_active');
        this.isLiked = !this.isLiked;
        this._likesCounter.textContent = data.likes.length;
      })
      .catch((err) => {
        console.log(err);
      })
  }

  markUserLikes(card) {
    if (this._likes.some(person => person._id === this._userId)) {
      this._buttonLike.classList.add('button_type_like_active');
    }
  }

  updateLikes(card) {
    this._likesCounter.textContent = this._likes.length;
  }

  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => {
      this._toggleLike();
    });

    this._buttonDelete.addEventListener('click', () => {
      this._handleDeleteIconClick(this);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._title, this._link);
    });
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _deleteCan() {
    if (this._userId !== this._ownerId) {
      this._buttonDelete.classList.add('button_type_delete_hidden')
    }
    else {
      this._buttonDelete.classList.remove('button_type_delete_hidden')
    }
  }

  createCard() {
    this._element = this._getTemplate();
    this._buttonLike = this._element.querySelector('.button_type_like');
    this._likesCounter = this._element.querySelector('.place__likesCounter');
    this._buttonDelete = this._element.querySelector('.button_type_delete');
    this._cardImage = this._element.querySelector('.place__image');
    this._cardTitle = this._element.querySelector('.place__title');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;
    this._cardTitle.textContent = this._title;
    this._deleteCan();
    this._setEventListeners();
    return this._element;
  }
}
