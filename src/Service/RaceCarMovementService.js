import ICarMovementService from './Interfaces/ICarMovementService.js';
import { MOVE_FORWARD_THRESHOLD } from '../constants.js';

class RaceCarMovementService extends ICarMovementService {
  constructor(randomNumberGenerator) {
    super();
    this.randomNumberGenerator = randomNumberGenerator;
  }

  decideMoveForward() {
    return this.randomNumberGenerator.generate() >= MOVE_FORWARD_THRESHOLD;
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
