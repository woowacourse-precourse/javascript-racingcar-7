export default function validateCarNames(input) {
  const carNames = input.split(',').map((name) => name.trim());
  if (carNames.some((name) => name.length > 5)) {
    throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.');
  }
  return carNames;
}
