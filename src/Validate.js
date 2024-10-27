class Validate {
  validateCar(carName) {
    const carArray = car.split(',');
    const validLength = carArray.every((name) => name.length <= 5);
    if (!carName || car.trim() === '') {
      // 차 이름이 공백일 때 error
      throw new Error('[Error]');
    }
    if (!validLength) {
      // 차 이름이 5자가 넘을 때 error
      throw new Error('[Error]');
    }
    return carName;
  }

  validateAttempts(attempts) {
    // 시도횟수 정수로 변환
    const parseNumber = parseInt(attempts, 10);
    if (!attempts || attempts.trim() === '') {
      // 시도횟수가 공백일 때 error
      throw new Error('[Error]');
    }
    if (isNaN(parseNumber)) {
      // 시도횟수를 숫자로 입력 하지 않았을 때 error
      throw new Error('[Error]');
    }
    return attempts;
  }
}
export default Validate;