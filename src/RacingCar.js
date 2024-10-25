import { Console } from "@woowacourse/mission-utils";
import { carCountLimitCheck } from "./Utils";
import { LOG_MESSAGE } from "./content.js";
class RacingCar {
  constructor() {}
  getCarName() {
    const input = Console.readLineAsync(LOG_MESSAGE.START_MESSAGE, split(","));
    carCountLimitCheck(input);
  }
}

export default RacingCar;
