import { Random, Console } from '@woowacourse/mission-utils';
import { displayCarMovement } from './UserInterface.js';
import { GAME_PROGRESS_MESSAGE } from './Message.js';

export default function progressGame(carDataList, moveCount) {
  Console.print(`\n${GAME_PROGRESS_MESSAGE.EXECUTION_RESULT}`);
  for (let i = 0; i < moveCount; i++) {
    const moveConditionValues = extractMoveValue(carDataList.length);
    displayCarMovement(carDataList, moveConditionValues);
    calculateTotalMoveValue(carDataList, moveConditionValues);
  }
  return carDataList;
}

function extractMoveValue(numberOfCars) {
  return Array.from({ length: numberOfCars }, () =>
    Random.pickNumberInRange(0, 9)
  );
}

function calculateTotalMoveValue(carDataList, moveConditionValues) {
  for (let i = 0; i < carDataList.length; i++) {
    addIfAboveFour(carDataList[i], moveConditionValues[i]);
  }
}

function addIfAboveFour(carData, moveConditionValue) {
  if (moveConditionValue >= 4) carData.totalMoveValue += moveConditionValue;
}
