import { Popup } from '../components/Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  };

  open(title, link) {
    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption');
    popupImage.src = link;
    popupImage.alt = title;
    popupCaption.textContent = title;
    super.open();
  };
}
