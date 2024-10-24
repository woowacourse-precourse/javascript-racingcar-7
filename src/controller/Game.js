import { GAME_MESSAGE } from '../constants/messages.js';
import User from '../user/User.js';
import outputView from '../view/outputView.js';
import Car from '../model/Car.js';
import { validateInput } from '../Validator/validator.js';

class Game {
  constructor() {
    this.user = new User();
    this.cars = [];
  }

  async process() {
    const carNameInput = await this.user.readCarNameInput();
    validateInput(carNameInput);
    this.initializeCars(carNameInput.split(','));
    const attempts = await this.user.readAttemptsInput();
    outputView.printMessage(`\n${GAME_MESSAGE.RESULT}`);
    this.race(Number(attempts));
    this.announceWinner();
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

  /**@todo print 해주는 애들의 담당은 Game이 아닌듯 */
  printRaceStatus() {
    this.cars.forEach((car) => {
      outputView.printMessage(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    outputView.printMessage('\n');
  }

  determineWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    return this.cars.filter((car) => car.position === maxPosition);
  }

  announceWinner() {
    const winners = this.determineWinners();
    const winnersName = winners.map((winner) => winner.name).join(', ');

    outputView.printMessage(`${GAME_MESSAGE.FINAL_WINNER} ${winnersName}`);
  }
}

export default Game;
