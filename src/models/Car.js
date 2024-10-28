import getRandomNumber from "../utils/RandomNumberGenerator.js";

export default class Car {
    constructor(name) {
        this.name = name;
        this.move = 0;
    }

    tryMove() {
        const number = getRandomNumber();

        if (number >= 4) {
            this.move++;
        }
    }

    getState() {
        return `${this.name} : ${'-'.repeat(this.move)}`
    }

    isWinner(moveCount) {
        if (this.move >= moveCount) {
            return true;
        }
        return false;
    }
};