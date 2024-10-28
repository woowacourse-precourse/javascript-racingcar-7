export function parseCarNames(userCarNames) {
  const carNames = userCarNames.split(",").filter((car) => car.trim() !== "");
  return carNames;
}

export function calculateResult(cars) {
  const sortedCars = [...cars].sort(
    (prev, next) => next.distance - prev.distance
  );
  const result = sortedCars.filter(
    (car) => car.distance === sortedCars[0].distance
  );
  return result;
}
