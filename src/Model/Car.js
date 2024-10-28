import { Random } from "@woowacourse/mission-utils";

export default class Car {

    constructor(name) {
        this.position = 0;
        this.name = name;
    }

    move() {
        if (Random.pickNumberInRange(0, 9) >= 4) {
            this.position += 1;
        }
    }

    getPosition() {
        return this.position
    }

    getName() {
        return this.name
    }

}