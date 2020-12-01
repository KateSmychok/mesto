const popupProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_addCard');
const popupFullImage = document.querySelector('.popup_type_fullImage');

const editButton = document.querySelector('.button_type_edit');
const addCardButton = document.querySelector('.button_type_add');

const submitFormProfile = document.querySelector('.popup__form_type_profile');
const buttonSubmitProfile = document.querySelector('.button_type_profile');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const nameInputError = document.querySelector('#name-error');
const jobInputError = document.querySelector('#job-error');

const submitFormAddCard = document.querySelector('.popup__form_type_addCard');
const buttonSubmitAddCard = document.querySelector('.button_type_addCard')
const cardTitleInput = document.querySelector('.popup__input_type_card-title');
const cardLinkInput = document.querySelector('.popup__input_type_card-link');
const cardTitleInputError = document.querySelector('#title-error');
const cardLinkInputError = document.querySelector('#link-error');

const closeButtonProfile = document.querySelector('.button_type_close-profile');
const closeButtonAddCard = document.querySelector('.button_type_close-addCard');
const closeButtonFullImage = document.querySelector('.button_type_close-fullImage');

const cardTemplate = document.querySelector('#card-template').content;
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const places = document.querySelector('.places');

function showPopup(popupCurrent) {
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

// Александр, выше я оставила поиск элемента по селектору, так как вешаю слушатель на закрытие по Esc на весь документ.

function removeError(input, inputError) {
  input.classList.remove('popup__input_error');
  inputError.textContent = '';
}

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
    popupImage.src = cardImage.src;
    popupImage.alt = cardTitle.textContent;
    popupCaption.textContent = cardTitle.textContent;
  })
  return cardElement;
}

function addCard(cardElement) {
  places.prepend(cardElement);
}

editButton.addEventListener('click', function() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  showPopup(popupProfile);
  buttonSubmitProfile.classList.remove('button_type_submit-disabled');
  removeError(nameInput, nameInputError);
  removeError(jobInput, jobInputError);
})

addCardButton.addEventListener('click', function () {
  cardTitleInput.value = '';
  cardLinkInput.value = '';
  showPopup(popupAddCard);
  buttonSubmitAddCard.classList.add('button_type_submit-disabled');
  removeError(cardTitleInput, cardTitleInputError);
  removeError(cardLinkInput, cardLinkInputError);
})

closeButtonProfile.addEventListener('click', function(evt) {
  closePopup(evt.target.closest('.popup'));
})

closeButtonAddCard.addEventListener('click', function(evt) {
  closePopup(evt.target.closest('.popup'));
})

closeButtonFullImage.addEventListener('click', function(evt) {
  closePopup(evt.target.closest('.popup'));
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
  addCard(item);
  closePopup(popupAddCard);
})

initialCards.forEach(itemInfo=> {
  const item = createCard(itemInfo);
  addCard(item);
})
