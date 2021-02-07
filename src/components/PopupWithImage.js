import {popupImage, popupCaption} from '../utils/constants.js';
import { Popup } from '../components/Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  };

  open(title, link) {
    popupImage.src = link;
    popupImage.alt = title;
    popupCaption.textContent = title;
    super.open();
  };
}
