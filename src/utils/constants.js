export const initialCards = [
  {
    title: 'Эльбрус',
    link: 'images/Эльбрус.jpg'
  },
  {
    title: 'Кичи-Балык',
    link: 'images/Кичи-Балык.jpg'
  },
  {
    title: 'Байкал',
    link: 'images/Байкал.jpg'
  },
  {
    title: 'Красноярский край',
    link: 'images/Красноярский_край.jpg'
  },
  {
    title: 'Крым',
    link: 'images/Крым.jpg'
  },
  {
    title: 'Домбай',
    link: 'images/Домбай.jpg'
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

export const popupImage = document.querySelector('.popup__image');
export const popupCaption = document.querySelector('.popup__caption');
export const places = document.querySelector('.places');

export const formProfile = document.querySelector('.popup__form_type_profile');
export const formAddCard = document.querySelector('.popup__form_type_addCard');

export const name = '.profile__name';
export const job = '.profile__job';
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');

export const editButton = document.querySelector('.button_type_edit');
export const addCardButton = document.querySelector('.button_type_add');
