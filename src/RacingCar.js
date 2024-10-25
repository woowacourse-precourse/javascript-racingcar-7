import { Console } from "@woowacourse/mission-utils";
import { carCountLimitCheck } from "./Utils.js";
import { LOG_MESSAGE } from "./content.js";
class RacingCar {
  constructor() {}
  async getCarName() {
    const input = await Console.readLineAsync(LOG_MESSAGE.START_MESSAGE);
    const carInput = input.split(",");
    carCountLimitCheck(carInput);
  }
}

export default RacingCar;
