export function getHighestPositionCars(cars) {
  const highestPosition = Math.max(...cars.map((car) => car.position));
  return cars
    .filter((car) => car.position === highestPosition)
    .map((car) => car.name)
    .join(', ');
}
