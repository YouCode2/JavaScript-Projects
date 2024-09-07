
const hourE1 = document.querySelector('.hour');
const minuteE2 = document.querySelector('.minute');
const secondE3 = document.querySelector('.second');

function updateClock() {
    let CurrentDate = new Date();

    let s = CurrentDate.getSeconds();
    let m = CurrentDate.getMinutes();
    let h = CurrentDate.getHours();

    setTimeout(() => {
        updateClock()
    }, 1000);
   
    let seconddeg = (s / 60) * 360;
    secondE3.style.transform = `rotate(${seconddeg}deg)`;

    let minutedeg = (m / 60) * 360;
    minuteE2.style.transform = `rotate(${minutedeg}deg)`;

    let hourdeg = (h / 12) * 360;
    hourE1.style.transform = `rotate(${hourdeg}deg)`;
}
updateClock()
