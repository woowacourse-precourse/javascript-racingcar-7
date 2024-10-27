import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const names = await this.getCarNames();
      const attempts = await this.getAttempts();
      const cars = this.initializeCars(names);
      this.startRace(cars, attempts);
      this.printWinners(cars);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
  async getCarNames() {
    const input = await MissionUtils.Console.readLineAsync("자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분).");
    const names = input.split(",");
    if (names.some(name => name.length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.");
    }
    return names;
  }

  
}

export default App;