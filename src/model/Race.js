import RandomNum from "./RandomNumber.js";
import { Console } from "@woowacourse/mission-utils";

const randomnumber = new RandomNum();

class Race {
  async race(car, arr, trynumber) {
    for (let i = 0; i < trynumber; i++) {
      await this.advance(car, arr);
    }
  }
  async advance(car, arr) {
    for (let j = 0; j < car.length; j++) {
      const number = await randomnumber.RNumber();
      const progress = this.getProgress(number);
      arr[j] += progress;
    }
  }
  getProgress(number){
    if(number >= 4) return 1;
    return 0;
  }
}


export default Race;

