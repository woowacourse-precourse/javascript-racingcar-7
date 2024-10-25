import { setWinner } from "./setWinner.js";
import printWinner from "./print/printWinner.js";

export function findWinner(cars, carMoveHashMap, ATTEMPT_COUNT) {
    const winners = [];

    for (let car of cars) {
        setWinner(car, carMoveHashMap, winners, ATTEMPT_COUNT);
    }

    printWinner(winners, carMoveHashMap);
}