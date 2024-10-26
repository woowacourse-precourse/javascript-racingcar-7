export function setWinner(car, carMoveObj, winners, ATTEMPT_COUNT) {
    if (carMoveObj[car].length === ATTEMPT_COUNT) winners.push(car);
}