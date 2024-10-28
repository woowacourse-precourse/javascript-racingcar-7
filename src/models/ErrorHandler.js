// 5자 이하 입력
export function validateCarNames(carNames) {
  if (carNames.some((name) => name.length > 5)) {
    throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.');
  }
  return true;
}
