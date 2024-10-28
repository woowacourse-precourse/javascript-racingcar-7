import { GAME_MESSAGE } from '../constants/messages.js';
import outputView from '../view/outputView.js';
import { validateCarName } from '../Validator/validateCarName.js';
import { validateAttempts } from '../Validator/validateAttempts.js';
import Car from '../model/Car.js';

class Game {
  constructor(user, outputView, RaceClass) {
    this.user = user;
    this.outputView = outputView;
    this.RaceClass = RaceClass;
    this.raceInstance = null;
  }

  initializeCars(carNameInput) {
    return carNameInput.split(',').map((name) => new Car(name));
  }

  async process() {
    const carNameInput = await this.user.readUserInput(GAME_MESSAGE.START);
    validateCarName(carNameInput);
    const cars = this.initializeCars(carNameInput);
    this.raceInstance = new this.RaceClass(cars);

    const attempts = await this.user.readUserInput(GAME_MESSAGE.ATTEMPTS);
    validateAttempts(attempts);

    outputView.printMessage(`\n${GAME_MESSAGE.RESULT}`);
    this.raceInstance.race(Number(attempts));

    const winners = this.raceInstance.determineWinners();
    this.outputView.announceWinner(winners);
  }
}

export default Game;
