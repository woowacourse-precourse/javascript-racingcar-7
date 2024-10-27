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

  validateAttempt() {

  }
}