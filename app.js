const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundToNum(num){
    return Math.round(num * 100)/100;
}
function celciusToFahrenheitAndKelvin() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9 / 5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value =  roundToNum(fTemp);
    kelvinInput.value =  roundToNum(kTemp);
}

function fahrenheitTocelciusAndKelvin(){
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp =(fTemp - 32) * (5/9);
    const kTemp = (fTemp + 495.67) * 5/9;
    celciusInput.value =  roundToNum(cTemp);
    kelvinInput.value =  roundToNum(kTemp);

}

function kelvinToCelciusandFahrenheit(){
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celciusInput.value =  roundToNum(cTemp);
    fahrenheitInput.value =  roundToNum(fTemp);

}
celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener('input',fahrenheitTocelciusAndKelvin);
kelvinInput.addEventListener('input',kelvinToCelciusandFahrenheit);
