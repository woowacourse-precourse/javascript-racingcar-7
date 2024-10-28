import { Random } from "@woowacourse/mission-utils";
import Cars from "./Cars";

class Game {
    #cars;
    #attempts;

    constructor(names, attempts) {
        this.#cars = new Cars(names);
        this.#attempts = attempts;
    }

    async play() {
        for (let i = 0; i < this.#attempts; i++) {
            await this.#playRound();
        }
    }

    async #playRound() {
        const carPositions = this.#cars.getCarPositions();
        const randomNumbers = await this.#generateRandomNumbers(carPositions.length);
        this.#cars.moveCars(randomNumbers);
    }

    async #generateRandomNumbers(count) {
        return Promise.all(
            Array(count)
                .fill()
                .map(() => Random.pickNumberInRange(0, 9))
        );
    }

    getWinners() {
        return this.#cars.findWinners();
    }

    getAttempts() {
        return this.#attempts;
    }

    getCurrentPositions() {
        return this.#cars.getCarPositions();
    }
}

export default Game;