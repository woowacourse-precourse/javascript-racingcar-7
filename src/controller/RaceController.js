import { Console } from '@woowacourse/mission-utils';
import RaceView from '../view/RaceView.js';

class RaceController {
  constructor() {
    this.view = new RaceView();
  }

  async startRace() {
    const carName = await this.view.getCarName();
    Console.print(`carName : ${carName}`);
    const raceCount = await this.view.getAttemptCount();
    Console.print(`raceCount : ${raceCount}`);
  }
}

export default RaceController;
