class Race {
  #cars = [];
  #raceCount;

  constructor() {
  }

  addRacingCar(car) {
    this.#cars.push(car);
  }

  setRaceCount(raceCount) {
    this.#raceCount = raceCount;
  }

  

}

export default Race;