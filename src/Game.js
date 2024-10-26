class Game {
  #CARS_LIST = [];

  constructor(names, repetitionNumber) {
    this.carNames = this.parseNames(names);
    this.repetitionNumber = repetitionNumber;
    this.currentRepeat = 0;
  }

  parseNames(names) {
    return names.split(',');
  }
}

export default Game;
