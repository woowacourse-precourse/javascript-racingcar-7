import Car from "./Car";

class RacingGame {
  constructor() {
    this.cars = [];
  }

  createCars(namesInput) {
    const carNames = namesInput.split(",").map((name) => name.trim());
    this.validateDuplicateCarName(carNames);
    this.cars = carNames.map((name) => new Car(name));
  }

  validateDuplicateCarName(names) {
    const uniqueNames = new Set(names); // Set은 중복 허용 x
    if (uniqueNames.size !== names.length) {
      throw new Error("[ERROR] 중복된 이름이 있습니다.");
    }
  }

  validateTryCount(countInput) {
    const count = Number(countInput);

    if (count <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1이상이어야 합니다.");
    }

    if (Number.isNaN(count)) {
      throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
    }

    return count;
  }
}

export default RacingGame;
