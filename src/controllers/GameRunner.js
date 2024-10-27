class GameRunner {
  constructor(outputView, game) {
    this.outputView = outputView;
    this.game = game;
  }

  async playGame(tryCount) {
    await this.printGameStartMessage();
    await this.playRounds(tryCount);
    this.printGameResult();
  }

  async printGameStartMessage() {
    this.outputView.printGameStartMessage();
  }

  // 입력된 시도 횟수만큼 게임을 진행하는 메서드
  async playRounds(tryCount) {
    for (let i = 0; i < tryCount; i++) {
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

export default GameRunner;
