const popupProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_addCard');
const popupFullImage = document.querySelector('.popup_type_fullImage');
const editButton = document.querySelector('.button_type_edit');
const addCardButton = document.querySelector('.button_type_add');

const submitFormProfile = document.querySelector('.popup__form_type_profile');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const submitFormAddCard = document.querySelector('.popup__form_type_addCard');
const cardTitleInput = document.querySelector('.popup__input_type_card-title');
const cardLinkInput = document.querySelector('.popup__input_type_card-link');

function showPopup(popupCurrent) {
  popupCurrent.classList.add('popup_opened');
}

editButton.addEventListener('click', function() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  showPopup(popupProfile);
})

addCardButton.addEventListener('click', function () {
  showPopup(popupAddCard);
})

const closeButtons = document.querySelectorAll('.button_type_close');

function closePopup(popupCurrent) {
  popupCurrent.classList.remove('popup_opened');
}

function closePopupOut(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if(evt.target.classList.contains('popup_opened')) {
    closePopup(popupOpened);
  }
}

popupProfile.addEventListener('mousedown', closePopupOut);
popupAddCard.addEventListener('mousedown', closePopupOut);
popupFullImage.addEventListener('mousedown', closePopupOut);

closeButtons.forEach(function(element) {
  element.addEventListener('click', function(evt) {
    const popupVisible = evt.target.closest('.popup');
    closePopup(popupVisible);
  })
})

submitFormProfile.addEventListener('submit', function(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  const popupVisible = evt.target.closest('.popup');
  closePopup(popupVisible);
})

submitFormAddCard.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const cardTitle = cardTitleInput.value;
  const cardImage = cardLinkInput.value;
  addCard(cardTitle, cardImage);
  const popupVisible = evt.target.closest('.popup');
  closePopup(popupVisible);
})

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

const places = document.querySelector('.places');

function addCard(cardTitleValue, cardLinkValue) {

  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.place__title').textContent = cardTitleValue;
  cardElement.querySelector('.place__image').setAttribute('src', cardLinkValue);
  cardElement.querySelector('.place__image').setAttribute('alt', cardTitleValue);

  const buttonLike = cardElement.querySelector('.button_type_like');

  buttonLike.addEventListener('click', function(evt) {
    evt.target.classList.toggle('button_type_like_active');
  });

  const buttonDelete = cardElement.querySelector('.button_type_delete');

  buttonDelete.addEventListener('click', function(evt) {
    evt.target.parentNode.remove();
  });

  places.prepend(cardElement);

  cardTitleInput.value = '';
  cardLinkInput.value = '';
}

initialCards.forEach((item)=> {
  addCard(item.name, item.link);
});

const placeImages = document.querySelectorAll('.place__image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

placeImages.forEach(function(element) {
  element.addEventListener('click', function () {
    showPopup(popupFullImage);
    popupImage.setAttribute('src', element.src);
    popupImage.setAttribute('alt', element.alt);
    const currentPlaceTitle = element.nextSibling.nextSibling.firstChild.nextSibling;
    popupCaption.textContent = currentPlaceTitle.textContent;
  })
})







