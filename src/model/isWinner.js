export const isWinner = (cars) => {
  const forward = cars.map((car) => car.go);
  const maxNumber = Math.max(...forward);

  const winners = cars.filter((car) => car.go === maxNumber);
  const winnerNames = winners.map((car) => car.name).join(', ');

  return winnerNames;
};
