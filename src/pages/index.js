import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupConfirm } from '../components/PopupConfirm';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

import {
  validationConfig,
  popupFullImage,
  popupProfile,
  popupAddCard,
  popupAvatar,
  popupConfirmDelete,
  places,
  formProfile,
  formAddCard,
  formAvatarUpdate,
  editButton,
  addCardButton,
  updateAvatarButton,
  name,
  job,
  avatar,
  nameInput,
  jobInput,

} from '../utils/constants.js';

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-20",
  headers: {
    "content-type": "application/json",
    "authorization": "7669375e-39ff-4166-9493-af9a3aca797d",
  },
});

const userInfo = new UserInfo(name, job, avatar);

api.getUserInfo()
  .then((data) => {
    userInfo.setUserInfo(data);
  })
  .catch((err) => {
    console.log(err);
  })

function createCard(data) {
  const card = new Card({
    data: data,
    cardSelector: '#card-template',
    userId: api.getUserInfo(),
    handlers: {
      handleCardClick: (title, link) => {
        popupImage.open(title, link)
      },
      handleLikeClick: (cardId, isLiked) => {
        return api.likeCard(cardId, isLiked)
      },
      handleDeleteIconClick: (cardObject) => {
        popupConfirm.cardObject = cardObject;
        popupConfirm.open()
      }
    }
  })
  const cardElement = card.createCard();
  card.markUserLikes(cardElement);
  card.updateLikes(cardElement);
  return cardElement;
}

function addNewCard(card, place) {
  place.prepend(card);
}

api.getInitialCards()
  .then((data) => {
    const CardsList = new Section({
      items: data,
      renderer: (item) => {
        const cardElement = createCard(item);
        CardsList.addItem(cardElement);
      }
    }, places);
    CardsList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  })

const popupWithFormAddCard = new PopupWithForm({
  popupSelector: popupAddCard,
  handleFormSubmit: (info) => {
    renderLoading(popupAddCard, true);
    api.postNewCard(info.title, info.link)
      .then((data) => {
        const cardElement = createCard(data);
        addNewCard(cardElement, places);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() =>
        renderLoading(popupAddCard, false))

  }
})

const popupWithFormProfile = new PopupWithForm({
  popupSelector: popupProfile,
  handleFormSubmit: (info) => {
    renderLoading(popupProfile, true);
    api.setUserInfo(info.name, info.job)
      .then((data) => {
        name.textContent = data.name;
        job.textContent = data.about;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() =>
        renderLoading(popupProfile, false))
  }
})

const popupWithFormAvatar = new PopupWithForm({
  popupSelector: popupAvatar,
  handleFormSubmit: (info) => {
    renderLoading(popupAvatar, true);
    api.setAvatar(info.avatarLink)
      .then((data) => {
        avatar.src = data.avatar;
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() =>
        renderLoading(popupAvatar, false))
  }
})

const popupImage = new PopupWithImage(popupFullImage);

const popupConfirm = new PopupConfirm({
  popupSelector: popupConfirmDelete,
  handleDeleteButtonClick:  () => {
    const cardId = popupConfirm.cardObject._cardId;
    api.deleteCard(cardId)
      .then(() => {
        popupConfirm.cardObject.deleteCard();
        popupConfirm.close();
        popupConfirm.cardObject = '';
      })
      .catch(err => {
        console.log(err);
      })
  }
})

addCardButton.addEventListener('click', function() {
  formAddCardValidation.removeErrors();
  formAddCardValidation.disableButton();
  popupWithFormAddCard.open();
});

editButton.addEventListener('click', function() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  formProfileValidation.removeErrors();
  formProfileValidation.enableButton();
  popupWithFormProfile.open();
})

updateAvatarButton.addEventListener('click', function() {
  popupWithFormAvatar.open();
})

function renderLoading(popup, isLoading) {
  const submitButton = popup.querySelector('.button_type_submit');
  if(isLoading) {
    submitButton.textContent = 'Сохранение...'
  }
  else {
    submitButton.textContent = 'Сохранить'
  }
}

const formProfileValidation = new FormValidator(validationConfig, formProfile);
formProfileValidation.enableValidation();

const formAddCardValidation = new FormValidator(validationConfig, formAddCard);
formAddCardValidation.enableValidation();

const formAvatarValidation = new FormValidator(validationConfig, formAvatarUpdate);
formAvatarValidation.enableValidation();


