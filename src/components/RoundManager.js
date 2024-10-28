import { Random } from '@woowacourse/mission-utils';
import Rules from '../resources/Rules.js';

class RoundManager {
  startRound(cars) {
    cars.forEach((car) => {
      if (this.canMoveForward()) {
        car.moveForward();
      }
    });
  }

  canMoveForward() {
    return (
      Random.pickNumberInRange(Rules.MIN_NUMBER, Rules.MAX_NUMBER) >=
      Rules.THRESHOLD_NUMBER
    );
  }

  getCarsStatuses(cars) {
    return cars.map((car) => car.getStatus());
  }

  getWinners(cars) {
    const maxDistance = Math.max(...cars.map((car) => car.currentDistance));
    return cars
      .filter((car) => car.currentDistance === maxDistance)
      .map((car) => car.name);
  }
}

export default RoundManager;
