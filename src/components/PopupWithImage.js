import {popupImage, popupCaption} from '../utils/constants.js';
import { Popup } from '../components/Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  };

  open(name, link) {
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;
    super.open();
  };
}
