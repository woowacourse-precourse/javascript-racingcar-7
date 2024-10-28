import { findWinners } from "./findWinners.js";
import { executeRaces } from "./execute.js";

export const simulateRace = (carNames, attemptCount) => {
  const cars = {};

  carNames.forEach((name) => {
    cars[name] = 0;
  });

  const raceStates = executeRaces(cars, attemptCount);
  const winners = findWinners(cars);

  return {
    raceStates,
    winners,
  };
};
