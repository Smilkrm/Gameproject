(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  modal.classList.remove('hidden');
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
modal.addEventListener('click', event => {
  if (event.target === modal) {
    modal.classList.add('hidden');
  }
});
// let userFirstName = prompt("what your name");
// console.log(userFirstName);
// let message = (`hi ${userFirstName}`)
// alert(message);
