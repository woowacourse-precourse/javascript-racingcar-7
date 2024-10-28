import InputPort from '../ports/InputPort.js';
import RacingInputProcessor from './RacingInputProcessor.js';

export default class RacingService {
  #racingInputProcessor;
  #racing;

  constructor (inputPort = InputPort) {
    this.#racingInputProcessor = new RacingInputProcessor(inputPort);
  }

  async execute () {
    this.#racing = await this.#racingInputProcessor.createRacing();
  }
}
