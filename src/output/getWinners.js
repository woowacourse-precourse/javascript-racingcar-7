import ERROR_MESSAGES from '../constraints/errorMessages.js';

function getMaxMoveCount(moveCountArray) {
  return Math.max(...moveCountArray);
}

function findWinners(carNames, moveCountArray, maxMoveCount) {
  return carNames.filter((_, index) => moveCountArray[index] === maxMoveCount);
}

export function getWinners(carNames, moveCountArray) {
  const MAX_MOVE_COUNT = getMaxMoveCount(moveCountArray);
  const WINNERS = findWinners(carNames, moveCountArray, MAX_MOVE_COUNT);

  if (!WINNERS) {
    throw new Error(ERROR_MESSAGES.NO_WINNERS);
  }

  return WINNERS;
}
