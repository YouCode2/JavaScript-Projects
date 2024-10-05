const buttonFive = document.querySelector('.btn5');
const buttonFour = document.querySelector('.btn4');
const buttonThree = document.querySelector('.btn3');
const buttonTwo = document.querySelector('.btn2');
const buttonOne = document.querySelector('.btn1');
const cardStack = document.querySelector('.card-stack')
const body = document.querySelector('body')

buttonFive.addEventListener('click', () => {
    cardStack.classList.add('animate-card5')
    body.style.background = "#aba5a2"
})
buttonFour.addEventListener('click', () => {
    cardStack.classList.add('animate-card4')
    body.style.background = "#110d0a"
})
buttonThree.addEventListener('click', () => {
    cardStack.classList.add('animate-card3')
    body.style.background = "#fe7da4"
})
buttonTwo.addEventListener('click', () => {
    cardStack.classList.add('animate-card2')
    body.style.background = "#8e9a48"
})
buttonOne.addEventListener('click', () => {
    cardStack.classList.add('animate-card1')
    body.style.background = "#a56142"
})