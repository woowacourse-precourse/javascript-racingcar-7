export default class RacingProcessor {
  #outputPort;

  constructor (outputPort) {
    this.#outputPort = outputPort;
  }

  processRacing (racing) {
    this.#outputPort.displayRaceHeader();

    while (!racing.isFinished()) {
      const roundResult = racing.startNewRound();
      this.#outputPort.displayCarsState(roundResult);
    }
  }
}
