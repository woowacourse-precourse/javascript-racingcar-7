import { Console, Random } from "@woowacourse/mission-utils";

class Race {
    constructor() { }

    static roundProgress(attempts, myObject) {
        for (let i = attempts; i > 0; i--) {
            Race.carProgress(myObject);
            Console.print("");
        }
    }

    static carProgress(myObject) {
        for (let i = 0; i < myObject.name.length; i++) {
            let randomNum = Random.pickNumberInRange(0, 9);

            myObject.position[i] += Race.carMovement(randomNum);

            Race.printProgress(myObject.name[i], myObject.position[i]);
        }
    }

    static carMovement(number) {
        if (number >= 4) {
            // 전진
            return 1;
        }
        // 멈춤
        return 0;
    }

    static printProgress(name, position) {
        const RACE_PROGRESS_BAR = '-'.repeat(position);
        const RACE_PROGRESS_MESSAGE = `${name} : ${RACE_PROGRESS_BAR}`;
        Console.print(RACE_PROGRESS_MESSAGE);
    }
}

export default Race;