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
