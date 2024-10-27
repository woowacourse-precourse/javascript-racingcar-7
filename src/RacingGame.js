class RacingGame {
  constructor() {
    this.scoreBoard = [];
  }

  getScoreBoard() {
    return this.scoreBoard;
  }

  getInitialBoard(carNames) {
    this.scoreBoard = carNames.map((car) => ({name: car, records: []}));
  }
}

export default RacingGame;
