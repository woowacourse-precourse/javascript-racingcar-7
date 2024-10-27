export function validateCarName(carNameList) {
  for (const carName of carNameList) {
    const distinctArr = new Set(carNameList);

    if (carNameList.length !== distinctArr.size) {
      throw new Error('[ERROR] 이름이 중복되었습니다.');
    }

    if (carName.length > 6) {
      throw new Error('[ERROR] 이름은 5자 이하로 작성해 주세요.');
    }

    if (carName.length === 0) {
      throw new Error('[ERROR] 이름은 1자 이상으로 작성해 주세요.');
    }
  }
}

export function validateTryCount(tryCount) {
  if (tryCount % 1 !== 0) {
    throw new Error('[ERROR] 정수만 입력해 주세요.');
  }

  if (tryCount <= 0) {
    throw new Error('[ERROR] 0보다 큰 수를 입력해 주세요.');
  }
}
