function getWinners(cars, maxPosition) {
  return cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.carName);
}
export { getWinners };
