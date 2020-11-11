let popup = document.querySelector('.popup');
let openButton = document.querySelector('.button_type_edit');
let closeButton = document.querySelector('.button_type_close');

function showPopup() {
  popup.classList.add('popup_opened');
}

openButton.addEventListener('click', showPopup);

function closePopup() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

let submitForm = document.querySelector('.popup__form');
let Name = document.querySelector('.profile__name');
let Job = document.querySelector('.profile__job');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');

nameInput.value = Name.textContent;
jobInput.value = Job.textContent;

function formSubmitHandler(evt) {
  evt.preventDefault();
  Name.textContent = nameInput.value;
  Job.textContent = jobInput.value;
}

submitForm.addEventListener('submit', formSubmitHandler);

let submitButton = document.querySelector('.button_type_submit');
submitButton.addEventListener('click', closePopup);
