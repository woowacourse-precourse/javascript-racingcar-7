export function initializeCarMoveCount(cars) {
    const carMoveHashMap = {};

    cars.forEach((car) => {
        carMoveHashMap[car] = [];
    })

    return carMoveHashMap;
}