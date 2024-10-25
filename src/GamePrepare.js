import { validateAllCarNames, validatePositiveNumber } from './Validation';

export default function prepareGameData(carNames, numberOfMove) {
  const carNameArray = extractCarName(carNames);
  validateAllCarNames(carNameArray);
  const carDataList = carNameArray.map(initializeCarData);
  numberOfMove = Number(numberOfMove);
  validatePositiveNumber(numberOfMove);
  return { carDataList, numberOfMove };
}

function extractCarName(carNames) {
  return carNames.split(',');
}

function initializeCarData(carName) {
  return {
    name: carName,
    totalMoveValue: 0,
  };
}
