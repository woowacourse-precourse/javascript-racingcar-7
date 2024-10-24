import Car from "./Car.js";

function createCars(carNames, countNum) {
    const cars = carNames.map(name => new Car(name, countNum));
    return cars;
}

export default createCars;