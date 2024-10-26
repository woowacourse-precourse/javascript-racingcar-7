export function pushMoveStatus(isMoved, carMoveObj, car) {
    if (isMoved) carMoveObj[car].push('-');
}