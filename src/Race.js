import { Random } from "@woowacourse/mission-utils";

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

  racing() {
    this.#cars.forEach(car => {
      const random = Random.pickNumberInRange(0, 9);
      car.forward(random);
    })
  }

  getRaceCount(){
    return this.#raceCount;
  }

  showRacingResult() {

  }


  

}

export default Race;