import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
    constructor(name) {
      this.name = name;
      this.position = 0; 
    }
  
    moveOrStop() {
      const number = MissionUtils.Random.pickNumberInRange(0, 9);

      if (number >= 4) {
        this.position = this.position + 1;
      }
    }
  }

  export default Car;
  