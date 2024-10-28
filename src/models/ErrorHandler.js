// 5자 이하 입력
export function validateCarNames(carNames) {
  if (carNames.some((name) => name.length > 5)) {
    throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.');
  }
  return true;
}

export function validateNotEmpty(carNames) {
  // 공백이거나 빈 문자열인 이름이 있는 경우 에러 발생
  if (carNames.some((name) => name.trim() === '')) {
    throw new Error('[ERROR] 정확한 이름을 입력해주세요.');
  }
}

export function validateRaceCountIsPositiveInteger(value) {
  // 정규식을 사용하여 양의 정수만 허용
  const positiveIntegerPattern = /^[1-9]\d*$/;

  if (!positiveIntegerPattern.test(value)) {
    throw new Error(
      '[ERROR] 경주 횟수는 양의 정수로 입력해야 합니다. (0, 음수, 문자, 띄어쓰기 입력 불가)',
    );
  }
}

