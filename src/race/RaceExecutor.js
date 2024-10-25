import { Random } from "@woowacourse/mission-utils";
import IOHandler from "../utils/IOHandler.js";

export default class RaceExcutor {
    #COUNT_SIGN = Object.freeze('-');

    #MIN_NUMBER_FOR_MOVE_CAR = Object.freeze(4);

    #getRandomNumber() {
        return Random.pickNumberInRange(0, 9);
    }

    #getPrintMessage(name, num) {
        return `${name} : ${this.#COUNT_SIGN.repeat(num)}\n`;
    }

    #printStartExcuteResultMessage() {
        IOHandler.output('실행 결과');
    }

    #printExcuteResult(result) {
        IOHandler.output(result);
    }

    #moveForwardCarOverRandomNumber(car) {
        const num = this.#getRandomNumber();
        if (num >= this.#MIN_NUMBER_FOR_MOVE_CAR) {
            car.moveForward();
        }

        return num;
    }

    #execute(cars) {
        let result = '';

        cars.forEach(car => {
            const num = this.#moveForwardCarOverRandomNumber(car);
            result = result.concat(this.#getPrintMessage(car.name, num));
        });

        return result;
    }

    executeForRaceCount(cars, raceCount) {
        this.#printStartExcuteResultMessage();

        for (let i = 0; i < raceCount; i++) {
            const executionResult = this.#execute(cars);
            this.#printExcuteResult(executionResult);
        }
    }
}