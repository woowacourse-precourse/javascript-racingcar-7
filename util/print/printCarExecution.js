import { Console } from "@woowacourse/mission-utils";

import { getRandomValue } from "../get/getRandomValue.js";
import { checkMove } from "../validation/checkMove.js";
import { pushMoveStatus } from "../pushMoveStatus.js";

export function printCarExecution(cars, carMoveHashMap) {
    for (let car of cars) {
        const isMoved = checkMove(getRandomValue());
        pushMoveStatus(isMoved, carMoveHashMap, car);
        Console.print(`${car} : ${carMoveHashMap[car].join('')}`);
    }
    Console.print(' ');
}