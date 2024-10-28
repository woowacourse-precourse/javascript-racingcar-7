const CARNAME_MIN_LENGTH = 1;
const CARNAME_MAX_LENGTH = 5;

export function checkForDuplicates(carNames) {
  const uniqueCarNames = new Set(carNames);
  if (uniqueCarNames.size !== carNames.length) {
    throw new Error(
      "[ERROR] 중복된 자동차 이름이 있습니다. 각 이름은 고유해야 합니다."
    );
  }

  return true;
}

// 자동차 이름 길이 수 체크
export const isValidLength = (target, min, max) => {
  return min <= target.length && target.length <= max;
};

// 자동차 이름 길이 유효성 검사
export const hasInvalidCarNameLength = (carNames) => {
  if (
    carNames.some(
      (carName) =>
        !isValidLength(carName, CARNAME_MIN_LENGTH, CARNAME_MAX_LENGTH)
    )
  ) {
    throw new Error("[ERROR] 자동차 이름의 길이가 유효하지 않습니다.");
  }
};

export const isPositiveInteger = (number) => {
  if (number <= 0 || !Number.isInteger(number)) {
    throw new Error("[ERROR] 양의 정수만 가능합니다.");
  }
};
