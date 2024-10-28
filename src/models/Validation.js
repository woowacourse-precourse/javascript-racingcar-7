// --- 상수 선언 ---
const POSITIVE_INTEGER_PATTERN = /^[1-9]\d*$/;
const ERROR_CAR_NAME_EMPTY = '[ERROR] 정확한 이름을 입력해주세요.';
const ERROR_CAR_NAME_TOO_LONG = `[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.`;
const ERROR_INVALID_RACE_COUNT =
  '[ERROR] 경주 횟수는 양의 정수로 입력해야 합니다. (0, 음수, 문자, 띄어쓰기 입력 불가)';

// --- 경주할 자동차 이름 입력 예외처리 ---
function validateCarNameNotBlank(name) {
  if (name.trim() === '') {
    throw new Error(ERROR_CAR_NAME_EMPTY);
  }
}

function validateCarNameLength(name) {
  if (name.length > 5) {
    throw new Error(ERROR_CAR_NAME_TOO_LONG);
  }
}

export function validateCarNames(carNames) {
  carNames.forEach((name) => {
    validateCarNameNotBlank(name);
    validateCarNameLength(name);
  });
}

// --- 시도할 횟수 입력 예외처리 ---
function validatePositiveInteger(value) {
  if (!POSITIVE_INTEGER_PATTERN.test(value)) {
    throw new Error(ERROR_INVALID_RACE_COUNT);
  }
}

function validateRaceCountLimit(value, maxCount = 100) {
  if (parseInt(value, 10) > maxCount) {
    throw new Error(
      `[ERROR] 최대 ${maxCount} 이하의 숫자만 입력할 수 있습니다.`,
    );
  }
}

export function validateRaceCountInput(value, maxCount = 100) {
  validatePositiveInteger(value);
  validateRaceCountLimit(value, maxCount);
}
