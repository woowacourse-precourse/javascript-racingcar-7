class GameInitializer {
  constructor(inputView, game) {
    this.inputView = inputView;
    this.game = game;
  }

  async initializeGame() {
    await this.initializeCars();
    const tryCount = await this.initializeTryCount();
    return tryCount;
  }

  // 자동차 이름을 입력받아 게임 시작
  async initializeCars() {
    const namesInput = await this.inputView.inputCarNames();
    this.game.createCars(namesInput);
  }

  // 시도 횟수를 입력받아 게임 시작
  async initializeTryCount() {
    const countInput = await this.inputView.inputTryCount();
    return this.game.validateTryCount(countInput);
  }
}

export default GameInitializer;
