import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this._name = name;
    this._mileage = 0;
  }

  get name() {
    return this._name;
  }

  get mileage() {
    return this._mileage;
  }

  move() {
    if(Random.pickNumberInRange(0, 9) >= 4) {
        ++this._mileage;
    }
  }
}

export default Car;
