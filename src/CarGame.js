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
            for (let carIdx = 0; carIdx < this.#cars.length; carIdx++) {
                this.#cars[carIdx].tryToMove();

                const carName = this.#cars[carIdx].getName();
                const carPosition = this.#cars[carIdx].getPosition();

                resultLogs.push(`${carName} : ${"-".repeat(carPosition)}`);
            }

            resultLogs.push("");
        }

        return resultLogs;
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
