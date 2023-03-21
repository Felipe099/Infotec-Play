const selectedButton = document.querySelector('button');
const modalOpen = document.querySelector('.modal-wrapper');
const modalMessage = document.querySelector('.modal .title span');
const modalClose = document.querySelector('.modal button.close');

selectedButton.addEventListener('click', () => {
    modalOpen.classList.add('open');
});

modalClose.addEventListener('click', () => {
    modalOpen.classList.remove('open');
});

window.addEventListener('keydown', closePressButtonEsc);

function closePressButtonEsc(event) {
    if (event.key === 'Escape') {
        modalOpen.close();
    }
}