import { Console } from "@woowacourse/mission-utils";
class RacingCar {
  constructor() {}
  getCarName() {
    const input = Console.readLineAsync();
    carCountLimitCheck(input);
  }

  carCountLimitCheck() {
    if (input.lenght < 5) {
      checkCpace();
    } else {
      throw new error();
    }
  }
}

export default RacingCar;
