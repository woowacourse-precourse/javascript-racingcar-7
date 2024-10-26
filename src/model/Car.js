import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { validateName } from "../validation.js";

export class Car {
    constructor(name) {
        validateName(name);
        this.name = name;
        this.moveScore = 0;
    }

    printMoveScore() {
        Console.print(`${this.name} : ${"-".repeat(this.moveScore)}`);
    }

    move() {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNumber > 3) this.moveScore++;
        this.printMoveScore();
    }
}
