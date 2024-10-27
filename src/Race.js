import { raceOutput } from "./output.js";
import { calculateRandomScores } from "./utils/calculator.js";

class Race {
  constructor(cars, turn) {
    this.carList = cars;
    this.turn = turn;
    this.score = cars.reduce((carList, name) => {
      carList[name] = 0;
      return carList;
    }, {});
  }

  play() {
    while (this.turn > 0) {
      calculateRandomScores(this.score);
      raceOutput(this.score);

      this.turn--;
    }

    return this.score;
  }
}

export default Race;
