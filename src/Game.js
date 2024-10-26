class Game {
  #CARS_LIST = [];

  constructor(names, repetitionNumber) {
    this.nameList = this.parseNames(names);
    this.#CARS_LIST = this.allocateCars(this.nameList);
    this.repetitionNumber = repetitionNumber;
    this.currentRepeat = 0;
  }

  parseNames(names) {
    return names.split(',');
  }

  allocateCars(nameList) {
    return nameList.map((name) => new Car(name));
  }
}

export default Game;
