import { Random } from '@woowacourse/mission-utils';

class CarRacer {
  constructor(carNamesArr, tryCnt) {
    this.carNamesArr = carNamesArr;
    this.tryCnt = tryCnt;
    this.moveCntPerCar = this.initMoveCntPerCar();
    this.result = [];
  }

  initMoveCntPerCar() {
    const moveCntPerCar = {};

    this.carNamesArr.forEach((car) => {
      moveCntPerCar[car] = 0;
    });

    return moveCntPerCar;
  }

  race() {
    for (let i = 0; i < this.tryCnt; i += 1) {
      this.moveCars();
      this.result.push({ ...this.moveCntPerCar });
    }

    return this.result;
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

export default CarRacer;
