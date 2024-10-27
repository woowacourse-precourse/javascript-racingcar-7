function validateCarNames(carNames) {
  carNames.forEach((name) => {
    if (name.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 입력 가능합니다.');
    }
    if (name.length == 0) {
      throw new Error(
        '[ERROR] 쉼표로 시작 또는 끝나거나 연속 두 번 이상 사용할 수 없습니다.'
      );
    }
  });

  if (!carNames[1]) {
    throw new Error('[ERROR] 경주할 자동차는 2대 이상 입력해야 합니다.');
  }

  if (carNames.length !== new Set(carNames).size) {
    throw new Error('[ERROR] 자동차 이름은 중복하여 입력할 수 없습니다.');
  }
}

export default validateCarNames;
