import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validator";

class Car {
  constructor(name) {
    this.name = Validator.checkNameOverRange(name);
    this.distance = 0;
  };

  move() {
    if(MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      this.distance++;
    }
  };
};

export default Car;