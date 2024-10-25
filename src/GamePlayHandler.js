import { Random, Console } from '@woowacourse/mission-utils';
import { displayCarMovement } from './UserInterface.js';
import { GAME_PROGRESS_MESSAGE } from './Message.js';

export default function progressGame(carDataList, numberOfMove) {
  Console.print(`${GAME_PROGRESS_MESSAGE.EXECUTION_RESULT}`);
  for (let i = 0; i < numberOfMove; i++) {
    const moveValues = extractMoveValue(carDataList.length);
    displayCarMovement(carDataList, moveValues);
    calculateTotalMoveValue(carDataList, moveValues);
  }
  return carDataList;
}

function extractMoveValue(numberOfCars) {
  return Array.from({ length: numberOfCars }, () =>
    Random.pickNumberInRange(0, 9)
  );
}

function calculateTotalMoveValue(carDataList, moveValues) {
  for (let i = 0; i < carDataList.length; i++) {
    addIfAboveFour(carDataList[i], moveValues[i]);
  }
}

function addIfAboveFour(carData, moveValue) {
  if (moveValue >= 4) carData.totalMoveValue += moveValue;
}
