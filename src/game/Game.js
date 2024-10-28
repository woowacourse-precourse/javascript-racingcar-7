import { displayRoundResult } from "./Result.js";

export function playGame(carNames, attemptCount) {
  const carPositions = carNames.reduce((acc, name) => {
    acc[name] = 0;
    return acc;
  }, {});

  for (let i = 0; i < attemptCount; i++) {
    raceRound(carPositions);
    displayRoundResult(carPositions);
  }

  return carPositions;
}
