import { MissionUtils } from "@woowacourse/mission-utils";

export default class Input {
  car;

  repeatCount;

  constructor() {
    this.car = [];
    this.repeatCount = 0;
  }

  async getCars() {
    const carString = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    this.car = carString.split(",");

    this.validateCarString();
    return this.car;
  }

  async getRepeatCount() {
    const repeatCountString = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    this.repeatCount = Number(repeatCountString);

    return this.repeatCount;
  }

  validateCarString() {
    if (this.car.some((car) => car.length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
    }
    if (new Set(this.car).size !== this.car.length) {
      throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
    }
    if (this.car.some((car) => !car)) {
      throw new Error("[ERROR] 자동차 이름은 비어있지 않은 문자열이어야 합니다.");
    }
  }
}
