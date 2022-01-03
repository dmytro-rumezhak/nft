(() => {
  const refs = {
    openPopupBtn: document.querySelector('[data-popup-open]'),
    popupone: document.querySelector('[data-popup-one]'),
    popuptwo: document.querySelector('[data-popup-two]'),
    popupthree: document.querySelector('[data-popup-three]'),
    popupfour: document.querySelector('[data-popup-four]')
  };

  refs.openPopupBtn.addEventListener('click', toggleModal);

  function toggleModal() {
      refs.popupone.classList.toggle('is-hidden');
      refs.popuptwo.classList.toggle('is-hidden');
      refs.popupthree.classList.toggle('is-hidden');
      refs.popupfour.classList.toggle('is-hidden');
  }
})();