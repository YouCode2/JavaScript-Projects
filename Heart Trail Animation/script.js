const body = document.querySelector("body");

body.addEventListener('mousemove', (event) => {
    const PositionX = event.offsetX;
    const PositionY = event.offsetY;
    const spanE = document.createElement('span');
    body.appendChild(spanE);
    spanE.style.top = PositionY + "px"
    spanE.style.left = PositionX + "px"
    setTimeout(() => {
        spanE.remove();
    }, 3000);
    const size = Math.random() * 100
    spanE.style.height = size + "px"
    spanE.style.width = size + "px"
})