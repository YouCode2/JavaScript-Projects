
const hourE1 = document.querySelector('.hour');
const minuteE2 = document.querySelector('.minute');
const secondE3 = document.querySelector('.second');

updateClock()
function updateClock() {

    let newDate = new Date();
    let s = newDate.getSeconds();
    let m = newDate.getMinutes();
    let h = newDate.getHours();

    let sdegree = (s / 60) * 360;
    secondE3.style.transform = `rotate(${sdegree}deg)`;

    let mdegree = (m / 60) * 360;
    minuteE2.style.transform = `rotate(${mdegree}deg)`;

    let hdegree = 30 * h + m / 2;
    hourE1.style.transform = `rotate(${hdegree}deg)`;

    setTimeout(() => {
        updateClock()
    }, 1000);

}

