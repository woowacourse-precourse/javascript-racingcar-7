import { Random } from "@woowacourse/mission-utils";

class Car {
  #name = "";
  #mileage = 0;
  
  constructor(name) {
    this.#name = name;
    this.#mileage = 0;
  }

  getName() {
    return this.#name;
  }

  getMileage() {
    return this.#mileage;
  }

  showMileage() {
    let mileageStr = '';
    for (let i = 0; i < this.#mileage; ++i) {
      mileageStr += '-'
    }
    return this.#name + ' : ' + mileageStr;
  }

  move() {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      ++this.#mileage;
    }
  }
}

export default Car;
