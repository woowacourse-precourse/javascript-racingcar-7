import { Console, MissionUtils } from "@woowacourse/mission-utils";

export class Car {
    constructor(name) {
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
