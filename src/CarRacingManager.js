class CarRacingManager {
  constructor(inputHandler, carRacingGame, outputHandler) {
    this.inputHandler = inputHandler;
    this.carRacingGame = carRacingGame;
    this.outputHandler = outputHandler;
  }

  async startGame() {
    try {
      const carNames = this.inputHandler.readCarsName();
    } catch (error) {
      this.outputHandler.printErrorMessage(error.message);
      throw error;
    }
  }
}

export default CarRacingManager;
