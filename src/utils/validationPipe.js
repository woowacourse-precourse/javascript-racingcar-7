import { isEmptyString, isNotEmptyString, isShorterThan } from "./validator.js";


function conditionPipe(data, ...fn){
  return fn.every(fn => fn(data));
}

export function carNameValidatePipe(carNameString){
  const carNames = carNameString.split(',');
  for (const carName of carNames) {
    if(!conditionPipe(carName, isNotEmptyString, isShorterThan(5)))
      throw new Error('[ERROR] 차이름이 잘못 되었습니다');
  }
  const carSet = new Set(carNames.map(carname=>carname.trim()));
  if (carSet.size !== carNames.length){
    throw new Error('[ERROR] 차이름이 중복되었어요!');
  }

  return true; 
}