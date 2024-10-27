export default function pickWinner(carDataList) {
  const maxTotalMoveValue = Math.max(
    ...carDataList.map((carData) => carData.totalMoveValue)
  );
  const winner = carDataList
    .filter((carData) => carData.totalMoveValue === maxTotalMoveValue)
    .map((carData) => carData.name);
  return winner;
}
