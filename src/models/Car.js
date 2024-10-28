import getRandomNumber from "../utils/RandomNumberGenerator";

export default class Car {
    constructor(name) {
        this.name = name;
        this.move = 0;
    }

    move() {
        const number = getRandomNumber();

        if (number >= 4) {
            this.move++;
        }
    }
};