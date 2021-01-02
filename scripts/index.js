import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const initialCards = [
  {
    name: 'Эльбрус',
    link: 'images/Эльбрус.jpg'
  },
  {
    name: 'Кичи-Балык',
    link: 'images/Кичи-Балык.jpg'
  },
  {
    name: 'Байкал',
    link: 'images/Байкал.jpg'
  },
  {
    name: 'Красноярский край',
    link: 'images/Красноярский_край.jpg'
  },
  {
    name: 'Крым',
    link: 'images/Крым.jpg'
  },
  {
    name: 'Домбай',
    link: 'images/Домбай.jpg'
  }
];

const popupProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_addCard');

const editButton = document.querySelector('.button_type_edit');
const addCardButton = document.querySelector('.button_type_add');

const formProfile = document.querySelector('.popup__form_type_profile');
const buttonSubmitProfile = document.querySelector('.button_type_profile');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const nameInputError = document.querySelector('#name-error');
const jobInputError = document.querySelector('#job-error');

const formAddCard = document.querySelector('.popup__form_type_addCard');
const buttonSubmitAddCard = document.querySelector('.button_type_addCard')
const cardTitleInput = document.querySelector('.popup__input_type_card-title');
const cardLinkInput = document.querySelector('.popup__input_type_card-link');

const cardTitleInputError = document.querySelector('#title-error');
const cardLinkInputError = document.querySelector('#link-error');

const closeButtonProfile = document.querySelector('.button_type_close-profile');
const closeButtonAddCard = document.querySelector('.button_type_close-addCard');
const closeButtonFullImage = document.querySelector('.button_type_close-fullImage');

const places = document.querySelector('.places');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_type_submit-disabled',
  inputErrorClass: 'popup__input_error',
};

const formProfileValidation = new FormValidator(validationConfig, formProfile);
const formAddCardValidation = new FormValidator(validationConfig, formAddCard);

export function showPopup(popupCurrent) {
  popupCurrent.classList.add('popup_opened');
  popupCurrent.addEventListener('mousedown', closePopupOut);
  document.addEventListener('keydown', closePopupEsc);
}

function closePopup(popupCurrent) {
  popupCurrent.classList.remove('popup_opened');
  popupCurrent.removeEventListener('mousedown', closePopupOut);
  document.removeEventListener('keydown', closePopupEsc);
}

function closePopupOut(evt) {
  if(evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function removeError(input, inputError) {
  input.classList.remove('popup__input_error');
  inputError.textContent = '';
}

function addCard(cardElement) {
  places.prepend(cardElement);
}

editButton.addEventListener('click', function() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  showPopup(popupProfile);
  formProfileValidation.enableValidation();
  buttonSubmitProfile.classList.remove('button_type_submit-disabled');
  removeError(nameInput, nameInputError);
  removeError(jobInput, jobInputError);
})

addCardButton.addEventListener('click', function () {
  cardTitleInput.value = '';
  cardLinkInput.value = '';
  showPopup(popupAddCard);
  formAddCardValidation.enableValidation();
  buttonSubmitAddCard.classList.add('button_type_submit-disabled');
  removeError(cardTitleInput, cardTitleInputError);
  removeError(cardLinkInput, cardLinkInputError);
})

closeButtonProfile.addEventListener('click', function() {
  closePopup(popupProfile);
})

closeButtonAddCard.addEventListener('click', function() {
  closePopup(popupAddCard);
})

closeButtonFullImage.addEventListener('click', function(evt) {
  closePopup(evt.target.closest('.popup'));
})

formProfile.addEventListener('submit', function(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupProfile);
})

formAddCard.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const newCardInfo = {
    name: `${cardTitleInput.value}`,
    link: `${cardLinkInput.value}`,
  };
  const card = new Card(newCardInfo, '#card-template');
  const cardElement = card.createCard();
  addCard(cardElement);
  closePopup(popupAddCard);
})

initialCards.forEach((item) => {
  const card = new Card(item, '#card-template');
  const cardElement = card.createCard();
  addCard(cardElement);
})


