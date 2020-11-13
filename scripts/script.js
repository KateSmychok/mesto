let popup = document.querySelector('.popup');
let openButton = document.querySelector('.button_type_edit');
let closeButton = document.querySelector('.button_type_close');
let submitForm = document.querySelector('.popup__form');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');

function showPopup() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  popup.classList.add('popup_opened');
}

openButton.addEventListener('click', showPopup);

function closePopup() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup();
}

submitForm.addEventListener('submit', formSubmitHandler);

