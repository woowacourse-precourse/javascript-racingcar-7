export function getWinners(cars) {
    let maxMoveCount = 0;
    let winnerNames = [];
    cars.forEach((car) => {
        if (car.moveForwardCount > maxMoveCount) {
            maxMoveCount = car.moveForwardCount;
            winnerNames = [car.name];
        } else if (car.moveForwardCount === maxMoveCount) {
            winnerNames.push(car.name);
        }
    });

    return winnerNames;
}