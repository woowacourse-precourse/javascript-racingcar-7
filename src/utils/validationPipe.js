import { isEmptyString, isLongerThan } from './validator.js';

const someConditionPipe = function (data, ...fn) {
  return fn.some((fn) => fn(data));
};

export const carNameValidatePipe = function (carNameString) {
  const carNames = carNameString.split(',');
  for (const carName of carNames) {
    if(someConditionPipe(carName, isEmptyString, isLongerThan(5))) throw new Error('[ERROR] 차 이름이 잘못 되었어요');
  }
  const carSet = new Set(carNames.map((carname) => carname.trim()));
  if (carSet.size !== carNames.length) {
    throw new Error('[ERROR] 차 이름이 중복되었어요!');
  }
  return true;
};

export const iterationValidatePipe = function (iterationString) {
  if (isNaN(iterationString)) {
    throw new Error('[ERROR] 입력된 반복 횟수가 숫자가 아니에요!');
  }
  const parsedNumber = parseInt(iterationString, 10);

  if (parsedNumber !== Number(iterationString)) {
    throw new Error('[ERROR] 정수로 입력해주세요!:)');
  }
  return true;
};
