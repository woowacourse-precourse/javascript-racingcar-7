import { Console } from "@woowacourse/mission-utils";

export function printWinner(cars, carMoveHashMap, ATTEMPT_COUNT) {
    const winners = [];

    for (let car of cars) {
        if (carMoveHashMap[car].length === ATTEMPT_COUNT) winners.push(car);
    }

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
}