import { displayRoundResult } from "./Result.js";
import { getRandomValue } from "../utils/RandomUtil.js";

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

function raceRound(carPositions) {
  Object.keys(carPositions).forEach(car => {
    const randomValue = getRandomValue(0, 9);
    if (randomValue >= 4) {
      carPositions[car] += 1;
    }
  });
}