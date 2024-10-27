export function validateCarNames(carNames) {
  const uniqueNames = new Set(carNames);
  if (uniqueNames.size !== carNames.length) {
    throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
  }

  carNames.forEach((name) => {
    if (name.length < 1 || name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.");
    }
  });
}

export function validateAttemptCount(input) {
  const tryCount = Number(input.trim());
  if (isNaN(tryCount)) {
    throw new Error("[ERROR] 입력값은 숫자여야 합니다.");
  }
  if (!Number.isInteger(tryCount)) {
    throw new Error("[ERROR] 정수를 입력해주세요.");
  }
  if (tryCount <= 0) {
    throw new Error("[ERROR] 시도 횟수는 양의 정수여야 합니다.");
  }

  return tryCount;
}
