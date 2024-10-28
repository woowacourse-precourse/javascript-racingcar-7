import Car from "./Car.js";

class CarGame {
    #cars;
    #tryCount;

    constructor(carNames, tryCount) {
        this.#cars = carNames.map((name) => new Car(name));
        this.#tryCount = tryCount;
    }

    startRace() {
        const resultLogs = [];

        for (let turn = 0; turn < this.#tryCount; turn++) {
            const currentTurnLogs = this.#raceOneTurn();
            resultLogs.push(...currentTurnLogs);
            resultLogs.push("");
        }

        return resultLogs;
    }

    #raceOneTurn() {
        const oneTurnLogs = [];

        this.#cars.forEach((car, _) => {
            car.tryToMove();
            oneTurnLogs.push(car.getCurrentLog());
        });

        return oneTurnLogs;
    }

    pickWinner() {
        const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));
        const winner = this.#cars
            .filter((car) => car.getPosition() === maxPosition)
            .map((car) => car.getName());
        return winner;
    }
}

export default CarGame;
