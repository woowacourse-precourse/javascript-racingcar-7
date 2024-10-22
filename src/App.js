import { MissionUtils } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.stringFromConsole = '';
    this.testCount = 0;

    this.stateList =[];
  }

  async input() {
    this.stringFromConsole = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    this.testCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    // await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
  }
  
  seperatedBySeperator() {
    const names = this.stringFromConsole.split(',');
    const stateList = names.map(e => [e, 0]);

    this.stateList = [...stateList];
  }

  async run() {
    await this.input();
    this.seperatedBySeperator();
  }
}

export default App;
