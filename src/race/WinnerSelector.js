export function getWinners(cars) {
    let maxMoveCount = 0;
    let winnerNames = [];
    cars.forEach((car) => {
        if (car.moveCount > maxMoveCount) {
            maxMoveCount = car.moveCount;
            winnerNames = [car.name];
        } else if (car.moveCount === maxMoveCount) {
            winnerNames.push(car.name);
        }
    });

    return winnerNames;
}