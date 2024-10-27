import { validateAllCarNames, validatePositiveNumber } from '../Validation.js';

export function prepareCarData(carNames) {
  const carNameArray = extractCarName(carNames);
  validateAllCarNames(carNameArray);
  const carDataList = carNameArray.map(initializeCarData);
  return carDataList;
}

export function prepareMoveCount(numberOfMove) {
  numberOfMove = Number(numberOfMove);
  validatePositiveNumber(numberOfMove);
  return numberOfMove;
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
