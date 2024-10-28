import { Console } from "@woowacourse/mission-utils";

class View {

  constructor() {
    this.carInputMessage = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
    this.raceCount = "시도할 횟수는 몇 회인가요?\n";
  }


  async readInputCar() {
    const carNames = await Console.readLineAsync(this.carInputMessage);
    return carNames;
  }

  async readInputRaceCount() {
    const raceCount = await Console.readLineAsync(this.carInputMessage);
    return raceCount;
  }
}

export default View;