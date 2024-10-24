import { Console } from "@woowacourse/mission-utils";

import { getRandomValue } from "../get/getRandomValue.js";
import { checkMove } from "../validation/checkMove.js";

export function printCarExecution(cars, carMoveHashMap) {
    for (let car of cars) {
        const isMoved = checkMove(getRandomValue());
        if (isMoved) carMoveHashMap[car].push('-');
        Console.print(`${car} : ${carMoveHashMap[car].join('')}`);
    }
    Console.print(' ');
}