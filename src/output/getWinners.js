function getMaxMoveCount(moveCountArray) {
  return Math.max(...moveCountArray);
}

function findWinners(carNames, moveCountArray, maxMoveCount) {
  return carNames.filter((_, index) => moveCountArray[index] === maxMoveCount);
}
