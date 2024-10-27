import CarRacingGame from './CarRacingGame.js';

class CarRacingManager {
  constructor(inputHandler, outputHandler) {
    this.inputHandler = inputHandler;
    this.outputHandler = outputHandler;
    this.carRacingGame = null;
  }

  async startGame() {
    try {
      const carNames = await this.inputHandler.readCarsName();
      const attemptCount = await this.inputHandler.readAttemptCount();
      this.carRacingGame = new CarRacingGame(carNames);
      this.outputHandler.printResultMessage();

      for (let i = 0; i < attemptCount; i++) {
        const roundResult = this.carRacingGame.playOneRound();
        this.outputHandler.printOneRoundResult(roundResult);
      }

      const winners = this.carRacingGame.getWinners();
      this.outputHandler.printFinalWinners(winners);
    } catch (error) {
      this.outputHandler.printErrorMessage(error.message);
      throw error;
    }
  }
}

export default CarRacingManager;
