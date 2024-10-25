export function pushMoveStatus(isMoved, carMoveHashMap, car) {
    if (isMoved) carMoveHashMap[car].push('-');
}