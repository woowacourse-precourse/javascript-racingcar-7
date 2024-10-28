import { RACE_MOVE } from "../constants/race.js";
import { formatRaceState } from "./formatRaceState.js";
import { generateRandomNumber } from "./randomNumber.js";

export const executeRaces = (cars, attemptCount) => {
  return Array.from({ length: attemptCount }, () => executeRound(cars));
};

export const executeRound = (cars) => {
  updateCarPositions(cars);
  return generateRaceState(cars);
};

export const updateCarPositions = (cars) => {
  for (const carName in cars) {
    if (generateRandomNumber() >= RACE_MOVE.PROGRESS) {
      cars[carName]++;
    }
  }
};

export const generateRaceState = (cars) => {
  return Object.entries(cars).map(formatRaceState);
};
