import { MissionUtils } from '@woowacourse/mission-utils';

class CarMovementService {
  generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  decideMoveForward() {
    return this.generateRandomNumber() >= 4;
  }

  moveCars(cars) {
    cars.forEach(car => {
      if (this.decideMoveForward()) {
        car.moveForward();
      }
    });
  }
}

export default CarMovementService;
