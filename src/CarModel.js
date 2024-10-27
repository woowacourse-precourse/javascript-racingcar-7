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
    let max = 0;
    const winners = [];

    this.carMap.forEach((position, name) => {
      if (position.length > max) {
        max = position.length;
        winners.length = 0;
        winners.push(name);
        return;
      }
      if (position.length === max) {
        winners.push(name);
      }
    });

    return winners.join(',');
  }
}

export default CarModel;
