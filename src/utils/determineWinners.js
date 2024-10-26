export function determineWinners(cars) {
  const maxCount = Math.max(...cars.map((car) => car.getCount()));
  const winnerObject = cars.filter((car) => car.getCount() === maxCount);
  const winnerNameArray = winnerObject.map((car) => {
    return car.getName();
  });
  return winnerNameArray;
}
