export default function findWinners(cars) {
  const maxDistance = Math.max(...cars.map((car) => car.movement.length));
  return cars.filter((car) => car.movement.length === maxDistance).map((car) => car.name);
}
