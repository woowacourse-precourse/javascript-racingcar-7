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
    await this.initializeCars();
    await this.initializeTryCount();
  }

  // 자동차 이름을 입력받아 게임 시작
  async initializeCars() {
    const namesInput = await this.inputView.inputCarNames();
    this.game.createCars(namesInput);
  }

  // 시도 횟수를 입력받아 게임 시작
  async initializeTryCount() {
    const countInput = await this.inputView.inputTryCount();
    this.tryCount = this.game.validateTryCount(countInput);
  }

  async playGame() {
    await this.printGameStartMessage();
    await this.playRounds();
    this.printGameResult();
  }

  async printGameStartMessage() {
    this.outputView.printGameStartMessage();
  }

  // 입력된 시도 횟수만큼 게임을 진행하는 메서드
  async playRounds() {
    for (let i = 0; i < this.tryCount; i++) {
      await this.playOneRound();
    }
  }

  // 한 라운드를 진행하는 메서드
  async playOneRound() {
    this.game.moveAllCars();
    this.printRoundStatus();
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
