import InputValidator from './utils/InputValidator.js';
import parse from './utils/parse.js';
import RacingCars from '../domain/RacingCars.js';
import Round from '../domain/Round.js';
import Racing from '../domain/Racing.js';

export default class RacingInputProcessor {
  #inputPort;

  constructor (inputPort) {
    this.#inputPort = inputPort;
  }

  async createRacing () {
    const { racingCars, round } = await this.process();
    return Racing.create(racingCars, round);
  }

  async process () {
    const carsName = await this.extractCarsName();
    const racingCars = RacingCars.create(carsName);
    const targetRoundNumber = await this.extractTargetRound();
    const round = new Round(targetRoundNumber);
    return { racingCars, round };
  }

  async extractCarsName () {
    const rawCarNames = await this.#inputPort.readCarsName();
    InputValidator.validateInputIsNull(rawCarNames);
    return parse(rawCarNames);
  }

  async extractTargetRound () {
    const targetRound = await this.#inputPort.readTargetRound();
    InputValidator.validateInputIsNull(targetRound);
    return Number(targetRound);
  }
}
