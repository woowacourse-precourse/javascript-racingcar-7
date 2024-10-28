import { GAME_MESSAGE } from '../constants/messages.js';
import outputView from '../view/outputView.js';
import { validateCarName } from '../Validator/validateCarName.js';
import { validateAttempts } from '../Validator/validateAttempts.js';

class Game {
  constructor(user, outputView, raceModel) {
    this.user = user;
    this.outputView = outputView;
    this.raceModel = raceModel;
  }

  async process() {
    const carNameInput = await this.user.readUserInput(GAME_MESSAGE.START);
    validateCarName(carNameInput);
    this.raceModel.initializeCars(carNameInput.split(','));

    const attempts = await this.user.readUserInput(GAME_MESSAGE.ATTEMPTS);
    validateAttempts(attempts);

    outputView.printMessage(`\n${GAME_MESSAGE.RESULT}`);
    this.raceModel.race(Number(attempts));

    const winners = this.raceModel.determineWinners();
    this.outputView.announceWinner(winners);
  }
}

export default Game;
