import InputPort from '../ports/InputPort.js';
import OutputPort from '../ports/OutputPort.js';
import RacingInputProcessor from './RacingInputProcessor.js';
import RacingProcessor from './RacingProcessor.js';

export default class RacingService {
  #outputPort;
  #racingInputProcessor;
  #raceProcessor;
  #racing;

  constructor (inputPort = InputPort, outputPort = OutputPort) {
    this.#outputPort = outputPort;
    this.#racingInputProcessor = new RacingInputProcessor(inputPort);
    this.#raceProcessor = new RacingProcessor(this.#outputPort);
  }

  async execute () {
    this.#racing = await this.#racingInputProcessor.createRacing();
    this.#raceProcessor.processRacing(this.#racing);
    this.#outputPort.displayWinners(this.#racing.getWinners());
  }
}
