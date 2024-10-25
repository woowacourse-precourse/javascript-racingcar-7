function validateCarNames(carNames) {
  if (carNames.length === 1 && carNames[0] === '') {
    throw Error('[ERROR] 자동차 이름을 입력해 주세요!');
  }

  if (carNames.length !== carNames.filter((carName) => carName.length < 5).length) {
    throw Error('[ERROR] 쉼표(,)를 기준으로 분리했을 때, 자동차 이름은 6자 이상이 될 수 없습니다!');
  }

  if (carNames.length !== [...new Set(carNames)].length) {
    throw Error('[ERROR] 중복된 자동차 이름을 입력할 수 없습니다!');
  }
}

export default validateCarNames;
