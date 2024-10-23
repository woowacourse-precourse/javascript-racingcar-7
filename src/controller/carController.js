import { Console } from "@woowacourse/mission-utils";
import Validate from "../utils/validate.js";

class CarController{
  constructor() {
    this.Error = new Validate();
    this.carList = []; // 초기값은 추후 model로 분리할 것이다.
    this.count = 0;
  }

  async raceStart() {
    await this.inputCarList();
    await this.inputCount();
  }

  async inputCarList() {
    const carString = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    this.Error.carValidate(carString);
    const carNames = carString.split(',');
    carNames.forEach((name) => {
      this.carList.push(name.trim());
    })
  }

  async inputCount() {
    this.count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    this.Error.countValidate(this.count);
  }


}

export default CarController;