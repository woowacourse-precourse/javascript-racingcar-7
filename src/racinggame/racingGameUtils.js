const getMovePosition = function getMovePositionFunc(car) {
  return '-'.repeat(car.getMoveCount());
};

const getMaxMoveCount = function getMaxMoveCountFunc(cars) {
  return cars.reduce(
    (maxCount, car) => Math.max(maxCount, car.getMoveCount()),
    0,
  );
};

const filterWinningCars = function getWinningCarsFunc(cars, maxMoveCount) {
  return cars.filter((car) => car.getMoveCount() === maxMoveCount);
};

const getCarNames = function getCarNamesFunc(cars) {
  return cars.map((car) => car.getName());
};

export { getMovePosition, getMaxMoveCount, filterWinningCars, getCarNames };
