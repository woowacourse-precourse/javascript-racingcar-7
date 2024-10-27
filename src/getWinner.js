function getWinner(raceCount, carNames) {
  let winnerNames = [];
  const winnerRaceCount = Math.max(...raceCount);
  for (let i = 0; i < raceCount.length; i++) {
    if (winnerRaceCount == raceCount[i]) {
      winnerNames.push(carNames[i]);
    }
  }
  return winnerNames;
}

export default getWinner;
