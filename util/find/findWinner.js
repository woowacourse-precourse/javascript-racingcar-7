import { setWinner } from "../setWinner.js";
import printWinner from "../print/printWinner.js";

export function findWinner(cars, carMoveObj, ATTEMPT_COUNT) {
    const winners = [];

    for (let car of cars) {
        setWinner(car, carMoveObj, winners, ATTEMPT_COUNT);
    }

    printWinner(winners, carMoveObj);
}