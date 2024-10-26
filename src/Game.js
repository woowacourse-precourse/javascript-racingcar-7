class Game {
  #CARS_LIST = [];

  constructor(names, repetitionNumber) {
    this.carNames = this.parseNames(names);
    this.repetitionNumber = repetitionNumber;
    this.currentRepeat = 0;
  }
}

export default Game;
