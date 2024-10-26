import { MissionUtils } from "@woowacourse/mission-utils";

export default class Input {
  carString;

  repeatCount;

  constructor() {
    this.carString = "";
    this.repeatCount = 0;
  }

  async getCarString() {
    this.carString = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  }
}
