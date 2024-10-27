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

  
}

export default App;