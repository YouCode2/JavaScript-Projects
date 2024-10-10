const Celsius = document.getElementById('celsius');
const Fahrenheit = document.getElementById('fahrenheit');
const Kelvin = document.getElementById('kelvin');

function calctemp(event) {
    const currentValue = +event.target.value

    switch (event.target.name) {
        case "celsius":
            Fahrenheit.value = (currentValue * 1.8 + 32);
            Kelvin.value = (currentValue + 273.15);
            break;
        case "fahrenheit":
            Celsius.value = ((currentValue - 32) / 1.8);
            Kelvin.value = ((currentValue - 32) / 1.8 + 273.15);
            break;
        case "kelvin":
            Celsius.value = (currentValue - 273.15);
            Fahrenheit.value = ((currentValue - 273.15) * 1.8 + 32);
            break;
        default:
            break;
    }
}