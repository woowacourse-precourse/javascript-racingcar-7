export function isCarNamesValid(cars) {
  return cars.every((car) => car.length <= 5);
}
