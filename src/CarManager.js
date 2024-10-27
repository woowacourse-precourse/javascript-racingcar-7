import { Random } from '@woowacourse/mission-utils';

class CarManager {
  constructor(carNamesArr, attemptCnt) {
    this.carNamesArr = carNamesArr;
    this.attemptCnt = attemptCnt;
    this.moveCntPerCar = this.initMoveCntPerCar();
  }

  initMoveCntPerCar() {
    const moveCntPerCar = {};

    this.carNamesArr.forEach((car) => {
      moveCntPerCar[car] = 0;
    });

    return moveCntPerCar;
  }

  race() {
    for (let i = 0; i < this.attemptCnt; i += 1) {
      this.moveCars();
    }

    return this.moveCntPerCar;
  }

  moveCars() {
    this.carNamesArr.forEach((carName) => {
      this.moveCar(carName);
    });
  }

  moveCar(carName) {
    const randomNumber = this.getRandomNumber();

    if (this.isCarMove(randomNumber)) {
      this.moveCntPerCar[carName] += 1;
    }
  }

  isCarMove(randomNumber) {
    return randomNumber >= 4;
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }
}

export default CarManager;
