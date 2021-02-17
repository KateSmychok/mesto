import elbrus from '../images/Эльбрус.jpg';
import kichi from '../images/Кичи-Балык.jpg';
import baykal from '../images/Байкал.jpg';
import krasnoyarsk from '../images/Красноярский_край.jpg';
import krym from '../images/Крым.jpg';
import dombay from '../images/Домбай.jpg';

export const initialCards = [
  {
    title: 'Эльбрус',
    link: elbrus
  },
  {
    title: 'Кичи-Балык',
    link: kichi
  },
  {
    title: 'Байкал',
    link: baykal
  },
  {
    title: 'Красноярский край',
    link: krasnoyarsk
  },
  {
    title: 'Крым',
    link: krym
  },
  {
    title: 'Домбай',
    link: dombay
  }
];

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_type_submit-disabled',
  inputErrorClass: 'popup__input_error',
};

export const popupFullImage = document.querySelector('.popup_type_fullImage');
export const popupProfile = document.querySelector('.popup_type_profile');
export const popupAddCard = document.querySelector('.popup_type_addCard');
export const popupAvatar = document.querySelector('.popup_type_avatar');
export const popupConfirm = document.querySelector('.popup_type_confirm');

export const places = document.querySelector('.places');

export const formProfile = document.querySelector('.popup__form_type_profile');
export const formAddCard = document.querySelector('.popup__form_type_addCard');

export const name = '.profile__name';
export const job = '.profile__job';
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');

export const editButton = document.querySelector('.button_type_edit');
export const addCardButton = document.querySelector('.button_type_add');
export const updateAvatarButton = document.querySelector('.profile__avatar');

