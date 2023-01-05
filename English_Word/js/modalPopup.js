const modalBackground = document.querySelector('#modal');
const modalPopup = document.querySelector('#modal .content');
const modalPopupOpen = document.querySelector('.open');
function modalOpen() {
    modalBackground.classList.add('on');
    modalPopup.classList.add('on');
}
modalPopupOpen.addEventListener('click', modalOpen);
