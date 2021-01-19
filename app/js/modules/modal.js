const modalButtons = document.querySelectorAll('.modal-btn'),
      modalPopup = document.querySelector('#modal-popup'),
      modalCloseButton = modalPopup.querySelector('.modal-close');
      
const openModal = () => {
    modalPopup.classList.remove('hidden');
    modalPopup.classList.add('grid');
};
const closeModal = () => {
    modalPopup.classList.add('hidden');
    modalPopup.classList.remove('grid');
};

modalButtons.forEach(btn => {
    btn.addEventListener('click', openModal);
});

modalCloseButton.addEventListener('click', closeModal);

modalPopup.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) {
        return;
    } 
    closeModal();
});

window.addEventListener('keyup', (e) => {
    if(e.key === 'Escape'){
        closeModal();
    }
});