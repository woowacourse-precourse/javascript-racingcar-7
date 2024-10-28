import { MissionUtils } from '@woowacourse/mission-utils';
import ICarMovementService from './Interfaces/ICarMovementService.js';
import {
  MOVE_FORWARD_THRESHOLD,
  RANDOM_NUMBER_END,
  RANDOM_NUMBER_START,
} from '../constants.js';

class RaceCarMovementService extends ICarMovementService {
  generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(
      RANDOM_NUMBER_START,
      RANDOM_NUMBER_END
    );
  }

  decideMoveForward() {
    return this.generateRandomNumber() >= MOVE_FORWARD_THRESHOLD;
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
