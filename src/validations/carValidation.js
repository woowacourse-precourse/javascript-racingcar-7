export const carValidation = (carNames) => {
  checkEmptyCarNames(carNames);
  checkCarNameLength(carNames);
  checkDuplicateCarNames(carNames);
  checkMinimumCarCount(carNames);
};

const checkEmptyCarNames = (carNames) => {
  if (carNames.some((name) => name === "")) {
    throw new Error("[ERROR] 자동차 이름은 빈 문자열이 될 수 없습니다.");
  }
};

const checkCarNameLength = (carNames) => {
  const isInvalidLength = carNames.some((name) => name.length > 5);
  if (isInvalidLength) {
    throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
  }
};

const checkDuplicateCarNames = (carNames) => {
  const distinctNames = new Set(carNames);
  if (distinctNames.size !== carNames.length) {
    throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
  }
};

const checkMinimumCarCount = (carNames) => {
  if (carNames.length < 2) {
    throw new Error("[ERROR] 자동차는 최소 2대 이상이어야 합니다.");
  }
};
