import InputValidator from './utils/InputValidator.js';
import parse from './utils/parse.js';

export default class RacingInputProcessor {
  #inputPort;

  constructor (inputPort) {
    this.#inputPort = inputPort;
  }

  async process () {
    const carsName = await this.extractCarsName();
    const targetRoundNumber = await this.extractTargetRound();
    return { carsName, targetRoundNumber };
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
