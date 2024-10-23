import { Console } from "@woowacourse/mission-utils";

export default class CarRacingView {
  constructor() {
    this.carNames = [];
  }

  async startGame() {
    await this.getCarNames();
  }

  async getCarNames() {
    const cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.carNames = cars.split(",");
  }
}
