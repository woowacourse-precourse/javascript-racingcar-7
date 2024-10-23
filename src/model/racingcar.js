import { Random } from "@woowacourse/mission-utils";

class Racingcar {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  randomNumberProduction = () => {
    return Random.pickNumberInRange(0, 9);
  };

  stopAndGo = () => {
    const STANDARD_NUMBER = this.randomNumberProduction();

    if (STANDARD_NUMBER >= 4) {
      this.distance += 1;
    }
  };
}

export default Racingcar;
