import { generateRandomNum } from './generateRandomNum.js';
import { moveCarForward } from './moveCarForward.js';
import { printRaceStatus } from './printRaceStatus.js';

export function runRaceRound(carNames, moveCountArray) {
  carNames.forEach((_, index) => {
    const RANDOM_NUMBER = generateRandomNum();
    moveCarForward(RANDOM_NUMBER, moveCountArray, index);
    printRaceStatus(carNames[index], moveCountArray[index]);
  });
}