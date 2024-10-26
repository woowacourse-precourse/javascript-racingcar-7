import { MissionUtils } from "@woowacourse/mission-utils";

export default class Input {
  car;

  repeatCount;

  constructor() {
    this.car = [];
    this.repeatCount = 0;
  }

  async getCarString() {
    const carString = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    this.car = carString.split(",");

    this.validateCarString();
  }

  validateCarString() {
    if (this.car.some((car) => car.length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
    }
  }
}
