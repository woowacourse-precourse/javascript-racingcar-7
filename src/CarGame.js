import Input from "./Input.js";
import Vaildator from "./Vaildator.js";
import Car from "./Car.js";
import Print from "./Print.js";

class CarGame {
    constructor() {
        this.input = new Input();
        this.validator = new Vaildator();
        this.print = new Print();
    }

    async start() {
        const CARS_INPUT = await this.getInputCars();
        const TRY_INPUT = await this.getInputTry();

        const cars = new Car(CARS_INPUT, TRY_INPUT);
        this.print.resultText();

        cars.startRounds();
        const winners = cars.winner();
        this.print.winnerText(winners);
    }

    async getInputCars() {
        let carsInput = await this.input.inputCars();
        this.validator.checkCarName(carsInput);
        carsInput = this.changeInputCars(carsInput);
        this.validator.checkCarCount(carsInput);
        return carsInput;
    }

    changeInputCars(carsInput) {
        let carsObj = carsInput.split(',').reduce((acc, car) => {
            acc[car.trim()] = 0;
            return acc;
        }, {});
        return carsObj;
    }

    async getInputTry() {
        const TRY_INPUT = await this.input.inputTry()
        this.validator.checkTryInput(TRY_INPUT);
        return TRY_INPUT;
    }

}

export default CarGame;