export function findWinners(carPositions) {
  let maxPosition = 0;
  let winners = [];

  for (const car in carPositions) {
    const position = carPositions[car].length;
    if (position > maxPosition) {
      maxPosition = position;
      winners = [car];
    } else if (position === maxPosition) {
      maxPosition = position;
      winners.push(car);
    }
  }

  return winners;
}