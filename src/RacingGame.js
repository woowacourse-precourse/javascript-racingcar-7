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

  getWinner(array) {
    const getScores = (round) => round.records.filter(Boolean).length;
    const scores = array.map(getScores);

    const highScore = Math.max(...scores);

    return array.filter((round) => (round.records.filter(Boolean).length === highScore))
      .map((round) => round.name)
      .join(', ');
  }
}

export default RacingGame;
