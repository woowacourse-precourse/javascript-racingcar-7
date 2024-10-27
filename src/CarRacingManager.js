class CarRacingManager {
  constructor(inputHandler, carRacingGame, outputHandler) {
    this.inputHandler = inputHandler;
    this.carRacingGame = carRacingGame;
    this.outputHandler = outputHandler;
  }

  async startGame() {
    try {
      const carNames = await this.inputHandler.readCarsName();
      const attemptCounts = await this.inputHandler.readAttemptCount();
    } catch (error) {
      this.outputHandler.printErrorMessage(error.message);
      throw error;
    }
  }
}

export default CarRacingManager;
