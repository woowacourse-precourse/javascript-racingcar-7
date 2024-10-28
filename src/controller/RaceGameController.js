import parser from '../utils/parser.js';
import {
  carNameValidatePipe,
  iterationValidatePipe,
} from '../utils/validationPipe.js';
import { MESSAGE, ERROR_MESSAGE } from '../constants/UI.js';

class RaceGameController {
  constructor (view, service) {
    this.view = view;
    this.service = service;
  }

  static onGetRaceCarNames (carNamesString) {
    if (!carNamesString) {
      throw new Error(`${ERROR_MESSAGE.HEADER} ${ERROR_MESSAGE.WRONG_INPUT}`);
    }
    carNameValidatePipe(carNamesString);
    return parser.parseCarName(carNamesString);
  }

  static onGetIteration (iterationString) {
    if (!iterationString) {
      throw new Error(`${ERROR_MESSAGE.HEADER} ${ERROR_MESSAGE.WRONG_INPUT}`);
    }
    iterationValidatePipe(iterationString);
    return parser.parseIteration(iterationString);
  }

  async run () {
    const carnames = await this.view.getCarNames();
    const iteration = await this.view.getIteration();
    this.service.ready(
      carnames,
      iteration,
      this.onRoundEnd.bind(this),
      this.onBeforeStart.bind(this),
    );
    this.service.start();
    const { winners } = this.service.getResult();
    this.view.showWinner(winners);
  }

  onRoundEnd (raceGameStatus) {
    const { cars } = raceGameStatus;
    this.view.showStatus(cars);
  }

  onBeforeStart () {
    this.view.out(MESSAGE.EXUTE_MESSAGE);
  }
}

export default RaceGameController;
