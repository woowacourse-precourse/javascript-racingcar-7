// --- 상수 선언 ---
const POSITIVE_INTEGER_PATTERN = /^[1-9]\d*$/;
const ERROR_NAME_EMPTY = '[ERROR] 정확한 이름을 입력해주세요.';
const ERROR_NAME_TOO_LONG = `[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.`;
const ERROR_RACE_COUNT_INVALID =
  '[ERROR] 경주 횟수는 양의 정수로 입력해야 합니다. (0, 음수, 문자, 띄어쓰기 입력 불가)';

// --- 경주할 자동차 이름 입력 예외처리 ---
export function validateNameNotBlank(name) {
  if (name.trim() === '') {
    throw new Error(ERROR_NAME_EMPTY);
  }
}

export function validateNameLength(name) {
  if (name.length > 5) {
    throw new Error(ERROR_NAME_TOO_LONG);
  }
}

export function validateCarNames(carNames) {
  carNames.forEach((name) => {
    validateNameNotBlank(name);
    validateNameLength(name);
  });
}

// --- 시도할 횟수 입력 예외처리 ---
export function validateRaceCount(value) {
  if (!POSITIVE_INTEGER_PATTERN.test(value)) {
    throw new Error(ERROR_RACE_COUNT_INVALID);
  }
}

export function validateRaceCountRange(value, maxCount = 100) {
  if (parseInt(value, 10) > maxCount) {
    throw new Error(
      `[ERROR] 최대 ${maxCount} 이하의 숫자만 입력할 수 있습니다.`,
    );
  }
}

export function validateRaceCountInput(value, maxCount = 100) {
  validateRaceCount(value);
  validateRaceCountRange(value, maxCount);
}
