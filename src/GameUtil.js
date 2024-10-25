import { Random } from '@woowacourse/mission-utils';

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
