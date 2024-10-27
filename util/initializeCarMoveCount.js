export function initializeCarMoveCount(cars) {
    const carMoveObj = {};

    cars.forEach((car) => {
        carMoveObj[car] = [];
    })

    return carMoveObj;
}