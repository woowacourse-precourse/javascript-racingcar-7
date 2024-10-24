export const findWinners = (cars) => {
  const maxDistance = Math.max(...cars.map((car) => car.getDistance()));
  return cars.filter((car) => car.getDistance() === maxDistance);
};
