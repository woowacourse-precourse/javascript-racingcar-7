import { MissionUtils } from '@woowacourse/mission-utils';
import ICarMovementService from './Interfaces/ICarMovementService.js';

class RaceCarMovementService extends ICarMovementService {
  generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  decideMoveForward() {
    return this.generateRandomNumber() >= 4;
  }

  moveCars(raceCars) {
    raceCars.forEach(raceCar => {
      if (this.decideMoveForward()) {
        raceCar.moveForward();
      }
      raceCar.saveForwardStatus();
    });
  }
}

export default RaceCarMovementService;
