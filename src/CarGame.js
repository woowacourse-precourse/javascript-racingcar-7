import Car from "./Car";

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
            const currentTurnLogs = this.raceOneTurn();
            resultLogs.push(...currentTurnLogs);
            resultLogs.push("");
        }

        return resultLogs;
    }

    raceOneTurn() {
        const oneTurnLogs = [];

        for (let carIdx = 0; carIdx < this.#cars.length; carIdx++) {
            const car = this.#cars[carIdx];
            car.tryToMove();
            oneTurnLogs.push(`${car.getName()} : ${"-".repeat(car.getPosition())}`);
        }

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
