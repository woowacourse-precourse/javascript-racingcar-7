export function validateCarNames(carNames) {
  if (carNames.length == 0) {
    throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
  }
  carNames.forEach((name) => {
    if (name.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
    }
  });
}

export function validateMoveCount(count) {
  if (isNaN(count)) {
    throw new Error('[ERROR] 이동 횟수는 숫자여야 합니다.');
  } else if (count <= 0) {
    throw new Error('[ERROR] 이동 횟수는 1 이상의 정수여야 합니다.');
  }
}
