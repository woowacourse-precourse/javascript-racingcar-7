import { Random } from '@woowacourse/mission-utils';

class CarModel {
  constructor() {
    this.carMap = new Map();
    this.carNames = [];
  }

  setCarNames(names) {
    const carNames = names.split(',');
    carNames.forEach(name => {
      this.carMap.set(name, '');
    });
    this.carNames = carNames;
  }

  moveCars() {
    this.carNames.forEach(name => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        const currentPosition = this.carMap.get(name);
        this.carMap.set(name, `${currentPosition}-`);
      }
    });
  }

  findWinner() {
    const winner = [''];
    let max = 0;
    for (let [key, value] of this.carMap) {
      if (value.length === max) {
        winner.push(key);
        max = value.length;
      }
      if (value.length > max) {
        winner.pop();
        winner.push(key);
        max = value.length;
      }
    }
    return winner.join(',');
  }
}

export default CarModel;
