import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

import {
  initialCards,
  validationConfig,
  popupFullImage,
  popupProfile,
  popupAddCard,
  places,
  formProfile,
  formAddCard,
  editButton,
  addCardButton,
  name,
  job,
  nameInput,
  jobInput,
} from '../utils/constants.js';

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card-template', handleCardClick);
    const cardElement = card.createCard();
    cardsList.addItem(cardElement);
  }
}, places);

cardsList.renderItems();

const popupImage = new PopupWithImage(popupFullImage);

function handleCardClick(title, link) {
  popupImage.open(title, link);
};

const popupWithFormAddCard = new PopupWithForm({
  popupSelector: popupAddCard,
  handleFormSubmit: (info) => {
    const card = new Card(info, '#card-template', handleCardClick);
    const cardElement = card.createCard();
    cardsList.addItem(cardElement);
  }
});

const userInfo = new UserInfo(name, job);

const popupWithFormProfile = new PopupWithForm({
  popupSelector: popupProfile,
  handleFormSubmit: (info) => {
    userInfo.setUserInfo(info.name, info.job)
  }
});

editButton.addEventListener('click', function() {
  const userData = userInfo.getUserInfo();
  console.log(userInfo.getUserInfo());
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  formProfileValidation.removeErrors();
  formProfileValidation.enableButton();
  popupWithFormProfile.open();
});

addCardButton.addEventListener('click', function () {
  formAddCardValidation.removeErrors();
  formAddCardValidation.disableButton();
  popupWithFormAddCard.open();
});

const formProfileValidation = new FormValidator(validationConfig, formProfile);
formProfileValidation.enableValidation();

const formAddCardValidation = new FormValidator(validationConfig, formAddCard);
formAddCardValidation.enableValidation();
