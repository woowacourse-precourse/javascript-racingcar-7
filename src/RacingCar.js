import { Console } from "@woowacourse/mission-utils";
class RacingCar {
  constructor() {}
  getCarName() {
    const input = Console.readLineAsync();
    carCountLimitCheck(input);
  }
}

export default RacingCar;
