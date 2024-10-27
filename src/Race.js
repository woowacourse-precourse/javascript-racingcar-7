import Car from "./Car.js";

class Race {
    constructor(carNames, moveCount) {
        this.cars = carNames.split(',').map(name => new Car(name.trim()));
        this.moveCount = moveCount;
    }

}

export default Race;