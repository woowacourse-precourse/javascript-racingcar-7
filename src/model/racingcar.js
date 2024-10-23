import { Random } from "@woowacourse/mission-utils";

class racingcar {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  randomNumberProduction = () => {
    return Random.pickNumberInRange(0, 9);
  };
}
