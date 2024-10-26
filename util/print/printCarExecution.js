import { Console } from "@woowacourse/mission-utils";

import { getRandomValue } from "../get/getRandomValue.js";
import { checkMove } from "../validation/checkMove.js";
import { pushMoveStatus } from "../pushMoveStatus.js";

export function printCarExecution(cars, carMoveObj) {
    for (let car of cars) {
        const isMoved = checkMove(getRandomValue());
        pushMoveStatus(isMoved, carMoveObj, car);
        Console.print(`${car} : ${carMoveObj[car].join('')}`);
    }
    Console.print(' ');
}