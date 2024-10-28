import getRandomNumber from "./randomNumberPicker";

function moveCar() {
    const randomNumber = getRandomNumber(0, 9);
    return randomNumber >= 4;
}

export { moveCar };