import PlayingCar from "./PlayingCar.js";
import OutputHandler from "../utils/OutputHandler.js";

class RacingGame {
    constructor(carNames) {
        this.cars = carNames.map((name) => new PlayingCar(name));
    }

    start(attempts) {
        for (let i = 0; i < attempts; i++) {
            this.cars.forEach((car) => car.move());
            OutputHandler.printRaceStatus(this.cars);
        }
        this.printWinners();
    }

    printWinners() {
        const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
        const winners = this.cars
            .filter((car) => car.getPosition() === maxPosition)
            .map((car) => car.getName());

        OutputHandler.printWinners(winners);
    }
}

export default RacingGame;