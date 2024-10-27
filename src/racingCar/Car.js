import { Console, MissionUtils } from "@woowacourse/mission-utils";

class Car {

    constructor(name) {
        this.name = name;
        this.position = 0;
    };

    move() {
        const random = this.getRandom();
        if (random >= 4) ++this.position;
        this.printProcess();
    };

    printProcess() {
        const process = new Array(this.position + 1).join('-');
        if (this.position > 0) {
            Console.print(`${this.name} : ${process}`);
        } else {
            Console.print(`${this.name} : `);
        };
    };

    getRandom() {
        return MissionUtils.Random.pickNumberInRange(0, 9);
    };
}

export default Car;