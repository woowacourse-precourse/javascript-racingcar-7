export function setWinner(car, carMoveHashMap, winners, ATTEMPT_COUNT) {
    if (carMoveHashMap[car].length === ATTEMPT_COUNT) winners.push(car);
}