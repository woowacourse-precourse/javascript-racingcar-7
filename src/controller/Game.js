import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/messages.js';
import User from '../user/User.js';
import outputView from '../view/outputView.js';
import Car from '../model/Car.js';

class Game {
  constructor() {
    this.user = new User();
    this.cars = [];
  }

  async process() {
    const carNameInput = await this.user.readCarNameInput();
    this.initializeCars(carNameInput.split(','));
    const attempts = await this.user.readAttemptsInput();
    outputView.printMessage(`${GAME_MESSAGE.RESULT}`);
    this.race(Number(attempts));
  }

  initializeCars(carNames) {
    this.cars = carNames.map((name) => new Car(name.trim()));
  }

  race(attempts) {
    for (let i = 0; i < attempts; i++) {
      this.moveForward();
      this.printRaceStatus();
    }
  }

  moveForward() {
    this.cars.forEach((car) => car.move());
  }

  printRaceStatus() {
    this.cars.forEach((car) => {
      outputView.printMessage(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    outputView.printMessage('\n');
  }
}

export default Game;
