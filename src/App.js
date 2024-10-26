import InputView from "./InputView.js";
import RacingGame from "./RacingGame.js";
import OutputView from "./OutputView.js";

class App {
  constructor(
    inputView = new InputView(),
    outputView = new OutputView(),
    game = new RacingGame()
  ) {
    this.inputView = inputView;
    this.outputView = outputView;
    this.game = game;
  }

  async run() {
    try {
      await this.initializeGame();
      await this.playGame();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async initializeGame() {
    const namesInput = await this.inputView.inputCarNames();
    this.game.createCars(namesInput);

    const countInput = await this.inputView.inputTryCount();
    this.tryCount = this.game.validateTryCount(countInput);
  }

  async playGame() {
    this.printGameStartMessage();

    for (let i = 0; i < this.tryCount; i++) {
      this.game.moveAllCars();
      this.printRoundStatus();
    }

    this.printGameResult();
  }

  printGameStartMessage() {
    this.outputView.printGameStartMessage();
  }

  // 현재 라운드의 자동차 상태를 출력하는 메서드
  printRoundStatus() {
    const carsStatus = this.game.getCarsStatus();
    this.outputView.printCarsStatus(carsStatus);
  }

  // 최종 결과를 출력하는 메서드
  printGameResult() {
    const winners = this.game.findWinners();
    this.outputView.printWinners(winners);
  }
}

export default App;
