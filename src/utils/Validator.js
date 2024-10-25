class Validator {
  static numberOfGamesValidation(input) {
    const NumberOfGames = parseFloat(input);

    if (Number.isNaN(NumberOfGames)) {
      throw new Error('[ERROR] 숫자가 아닌 값을 입력하셨습니다.');
    }
    if (NumberOfGames < 0) {
      throw new Error('[ERROR] 양수만 입력하실 수 있습니다.');
    }

    if (!Number.isInteger(NumberOfGames)) {
      throw new Error('[ERROR] 정수가 아닌 값을 입력하셨습니다.');
    }
    return NumberOfGames;
  }

  static carValidation(carArray) {
    if (carArray.length === 1) {
      throw new Error('[ERROR] 인식된 자동차가 없습니다.');
    }

    const hasEmptyName = carArray.some(car => !car || car.trim() === '');
    if (hasEmptyName) {
      throw new Error('[ERROR] 쉼표가 적절히 작성되지 않았습니다.');
    }

    const hasLongName = carArray.some(car => car.length > 5);
    if (hasLongName) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
  }
}
export default Validator;
