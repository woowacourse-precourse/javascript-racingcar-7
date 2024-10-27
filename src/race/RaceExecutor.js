import { Random } from "@woowacourse/mission-utils";
import IOHandler from "../utils/IOHandler.js";

export default class RaceExecutor {
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
    }

    #execute(cars) {
        let result = '';

        cars.forEach(car => {
            this.#moveForwardCarOverRandomNumber(car);
            result = result.concat(this.#getPrintMessage(car.name, car.moveForwardCount));
        });

        return result;
    }

    executeForMoveTryCount(cars, moveTryCount) {
        this.#printStartExcuteResultMessage();

        for (let i = 0; i < moveTryCount; i++) {
            const executionResult = this.#execute(cars);
            this.#printExcuteResult(executionResult);
        }
    }
}