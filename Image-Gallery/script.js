const imgContainer = document.querySelector('.container');
const previous = document.getElementById('prev');
const next = document.getElementById('next');

let x = 0
let timer;
previous.addEventListener('click', function () {
    x = x + 45
    clearTimeout(timer)
    updateGallery()
})
next.addEventListener('click', function () {
    x = x - 45
    clearTimeout(timer)
    updateGallery()
})
function updateGallery() {
    imgContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer = setTimeout(() => {
        x = x - 45
        updateGallery()
    }, 1000)
}
updateGallery()
