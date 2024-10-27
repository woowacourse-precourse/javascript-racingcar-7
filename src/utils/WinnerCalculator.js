export function determineWinners(carNames, results) {
  const maxDistance = Math.max(...results.map((result) => result.length));
  return carNames.filter((_, index) => results[index].length === maxDistance);
}
