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

    printCurrentState() {
      const MOVE_STATE = '-'.repeat(this.position);
      MissionUtils.Console.print(`${this.name} : ${MOVE_STATE}`);
    }
  }

  export default Car;
  