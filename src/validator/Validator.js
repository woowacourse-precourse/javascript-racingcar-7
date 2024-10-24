class Validator {
  static isValidCarName(cars) {
    const carNameArr = cars.split(',');
    const carSet = [...new Set(carNameArr)];

    if (carNameArr.some((car) => car.length > 5)) {
      throw new Error('[ERROR] 자동차의 이름은 5자 이하로 부여해야 합니다.');
    } else if (carNameArr.length !== carSet.length) {
      throw new Error('[ERROR] 자동차의 이름은 중복해서 부여할 수 없습니다.');
    } else if (carNameArr.some((car) => car === '')) {
      throw new Error('[ERROR] 자동차에 빈 이름을 부여할 수 없습니다.');
    }
  }

  static isValidMoveTimes(moveTimes) {
    const MAX_MOVE_TIMES = Number.MAX_VALUE;

    if (moveTimes === '') {
      throw new Error('[ERROR] 시도할 횟수를 입력해야 합니다.');
    } else if (isNaN(moveTimes)) {
      throw new Error('[ERROR] 시도할 횟수에 숫자를 입력해야 합니다.');
    } else if (moveTimes < 0) {
      throw new Error('[ERROR] 시도할 횟수에 음수를 적을 수 없습니다.');
    } else if (moveTimes > MAX_MOVE_TIMES) {
      throw new Error('[ERROR] 시도할 최대 횟수를 넘는 수를 입력할 수 없습니다.');
    }
  }
}

export default Validator;
