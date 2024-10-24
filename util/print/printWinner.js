import { Console } from "@woowacourse/mission-utils";

import { setWinner } from "../setWinner";

export function printWinner(cars, carMoveHashMap, ATTEMPT_COUNT) {
    const winners = [];

    for (let car of cars) {
        setWinner(car, carMoveHashMap, winners, ATTEMPT_COUNT);
    }

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
}