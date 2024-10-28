class RacingCar {
    constructor(carNames) {
        this.cars = carNames.map((name) => ({ name, position: 0 }));
    }
}

export default RacingCar;
