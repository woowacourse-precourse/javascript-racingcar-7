export function getWinner(carList, racingStatus) {
  const maxDist = Math.max(...racingStatus);
  return carList.filter((_, idx) => racingStatus[idx] === maxDist);
}