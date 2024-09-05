
const container = document.querySelector('.container');

const magnifier = document.querySelector('.magnify');

magnifier.addEventListener('click', () => {
    container.classList.toggle('change');
})