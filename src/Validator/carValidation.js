const IS_EMPTY_NAME = (carNames) => carNames.some((name) => name.length === 0);

const IS_DUPLICATION = (carNames) => new Set(carNames).size !== carNames.length;

const IS_NAME_LENGTH = (carNames) => carNames.some((name) => name.length > 5);

const IS_SPECIAL_CHARACTER = (carNames) =>
  carNames.some((name) => /[^a-zA-Z0-9]/.test(name));

const IS_SEPARATED = (carNames) =>
  carNames.some((name) => /[^a-zA-Z,]/.test(name));

export const CAR_VALIDATION = (inputCarName) => {
  const carNames = inputCarName.split(',').map((name) => name.trim());

  if (IS_EMPTY_NAME(carNames)) {
    throw new Error('[ERROR] 자동차 이름은 공백이 될 수 없습니다.');
  }
  if (IS_DUPLICATION(carNames)) {
    throw new Error('[ERROR] 자동차 이름 중 중복이 있습니다.');
  }
  if (IS_NAME_LENGTH(carNames)) {
    throw new Error('[ERROR] 자동차 이름은 5글자를 초과할 수 없습니다.');
  }
  if (IS_SPECIAL_CHARACTER(carNames)) {
    throw new Error(
      '[ERROR] 자동차 이름은 문자가 아닌 값이 포함될 수 없습니다.',
    );
  }
  if (IS_SEPARATED(carNames)) {
    throw new Error('[ERROR] 자동차 이름의 구분자는 쉼표여야합니다.');
  }
};
