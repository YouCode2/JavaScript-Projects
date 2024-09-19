const screen = document.querySelector(".input");
const buttons = document.querySelectorAll('button');

let BtnArray = Array.from(buttons)
String = ''

BtnArray.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        if (e.target.innerHTML == 'DEL') {
            String = String.substring(0, String.length - 1)
            screen.value = String
        }
        else if (e.target.innerHTML == 'AC') {
            String = ''
            screen.value = String
        }
        else if (e.target.innerHTML == '=') {
            String = eval(String)
            screen.value = String
        }

        else {
            String += e.target.innerHTML
            screen.value = String
        }

    })
})