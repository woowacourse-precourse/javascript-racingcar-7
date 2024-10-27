import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userCars = this.getCarName();
  }

  async getCarName() {
    try {
      const carname = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
    } catch (error) {}
  }
}

export default App;
