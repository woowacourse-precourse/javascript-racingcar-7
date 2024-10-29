import { generatorRandomPickNumber } from "../utils/generatorRandomPickNumber.js";

class RacingGame {

    static MINIMUM_MOVE_NUMBER = 4;

    #cars;

    #attemptCount;

    #racingStatus;

    #executionResults;

    constructor(cars, attempCount) {
        this.#cars = cars;
        this.#attemptCount = attempCount;
        this.#racingStatus = this.getRacingStatus(cars);
        this.#executionResults = [];
    }

    getRacingStatus(cars) {
        return Object.fromEntries(cars.map(name => [name, 0]));
    }

    getExecutionResults() {
        for(let i = 0; i < this.#attemptCount; i++) {
            this.runRound();
            const currentExecutionResults = { ...this.#racingStatus };
            this.#executionResults.push(currentExecutionResults);
        }
        return this.#executionResults;
    }

    runRound() {
        this.#cars.forEach(car => {
            this.randomMoveForwardOneStep(car);
        });
    }

    randomMoveForwardOneStep(car) {
        const randomNumber = generatorRandomPickNumber();
        if(randomNumber >= RacingGame.MINIMUM_MOVE_NUMBER) {
            this.#racingStatus[car] += 1;
        }        
    }

    getRacingWinners() {
        const maxValue = Math.max(...Object.values(this.#racingStatus));
        const winners = Object.entries(this.#racingStatus).filter(([key, value]) => value === maxValue).map(([key]) => key);
        return winners;
    }

}

export default RacingGame;