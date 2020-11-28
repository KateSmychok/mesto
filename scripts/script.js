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
  cardTitleInput.value = '';
  cardLinkInput.value = '';
  showPopup(popupAddCard);
})

const closeButtons = document.querySelectorAll('.button_type_close');

function closePopup(popupCurrent) {
  popupCurrent.classList.remove('popup_opened');
}

function closePopupOut(evt) {
  if(evt.target.classList.contains('popup_opened')) {
    const popupOpened = document.querySelector('.popup_opened');
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
  closePopup(popupProfile);
})

submitFormAddCard.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const item = createCard( {
    name: cardTitleInput.value,
    link: cardLinkInput.value
  });
  createCard(item);
  addCard(item);
  closePopup(popupAddCard);
})

const cardTemplate = document.querySelector('#card-template').content;

function createCard(item) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.place__image');
  const cardTitle = cardElement.querySelector('.place__title');

  cardTitle.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  const buttonLike = cardElement.querySelector('.button_type_like');

  buttonLike.addEventListener('click', function(evt) {
    evt.target.classList.toggle('button_type_like_active');
  });

  const buttonDelete = cardElement.querySelector('.button_type_delete');

  buttonDelete.addEventListener('click', function(evt) {
    evt.target.closest('.place').remove();
  });

  cardImage.addEventListener('click', function() {
    showPopup(popupFullImage);
    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption');
    popupImage.src = cardImage.src;
    popupImage.alt = cardTitle.textContent;
    popupCaption.textContent = cardTitle.textContent;
  })
  return cardElement;
}

const places = document.querySelector('.places');

function addCard(cardElement) {
  const item = cardElement;
  places.prepend(item);
}

initialCards.forEach(itemInfo=> {
  const item = createCard(itemInfo);
  addCard(item);
});
