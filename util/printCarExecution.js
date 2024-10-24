import { getRandomValue } from "./getRandomValue";
import { checkMove } from "./checkMove";

export function printCarExecution(cars, carMoveHashMap) {
    for (let car of cars) {
        const isMoved = checkMove(getRandomValue());
        if (isMoved) carMoveHashMap[car].push('-');
        Console.print(`${car} : ${carMoveHashMap[car].join('')}`);
    }
    Console.print(' ');
}