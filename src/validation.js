export function validateEmptyInput(carsInput) {
  carsInput.forEach((car) => {
    if (!car || car.length === 0) {
      throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
    }
  });
}

export function validateCarNameLength(carsInput) {
  carsInput.forEach((car) => {
    if (car.length >= 5) {
      throw new Error('[ERROR] 자동차 이름을 5자 미만으로 입력해주세요.');
    }
  });
}

export function validateDuplicateCarName(carsInput) {
  const set = new Set(carsInput);
  if (carsInput.length !== set.size) {
    throw new Error('[ERROR] 중복된 자동차 이름을 입력할 수 없습니다.');
  }
}

export function validateTryCountType(tryCount) {
  if (typeof tryCount === isNaN) {
    throw new Error('[ERROR] 경주 시도 횟수를 숫자로 입력해주세요.');
  }
}
