import { Random, Console } from "@woowacourse/mission-utils";

class Racingcar {
  constructor() {
    this.carNames = [];
    this.trialCount = 0;
    this.raceResults = [];
  }

  async askForInput() {
    try {
      await this.getCarNames();
      await this.getTrialCount();
      Console.print("\n실행 결과");
      this.runRace();
      this.printWinners();
    } catch (error) {
      Console.print("[ERROR]");
      throw error;
    }
  }

  async getCarNames() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    this.carNames = carNamesInput.split(",").map((name) => name.trim());
    this.validateCarNames();
    Console.print(`${this.carNames.join(", ")}`);
    this.raceResults = this.carNames.map(() => "");
  }



  async getTrialCount() {
    const trialInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    this.trialCount = parseInt(trialInput, 10);
    Console.print(`${this.trialCount}`);
  }




  async function run() {
    const racingcar = new Racingcar();
    await racingcar.askForInput();
  }
  
  export { run };
  
  
