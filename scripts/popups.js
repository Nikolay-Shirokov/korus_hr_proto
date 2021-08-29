const popupInterview = document.querySelector('.popup_name_full-interview');
const popupMap = document.querySelector('.popup_name_map');

let openedPopup;

function openPopup(popup) {
  popup.classList.add('transition-show');
  popup.classList.add('popup_opened');
  openedPopup = popup;
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function closePopupOnClickToShadowField(event) {
  if (event.target === event.currentTarget || event.target.classList.contains('popup__close-button')) {
    closePopup(event.currentTarget);
  }
}

document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('mousedown', closePopupOnClickToShadowField);
})

document.querySelectorAll('.interview__button-read-more').forEach(buttonElement => {
  buttonElement.addEventListener('click', () => openPopup(popupInterview));
})

document.querySelectorAll('.footer__open-map').forEach(buttonElement => {
  buttonElement.addEventListener('click', event => {
    popupMap.querySelector('iframe').src = event.target.dataset.src;
    openPopup(popupMap);
  })
})
