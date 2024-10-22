import { MissionUtils } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.stringFromConsole = '';
    this.testCount = 0;
  }

  async input() {
    this.stringFromConsole = await Console.readLineAsync();
    this.testCount = await Console.readLineAsync();
  }



  async run() {
    await this.input();
    
  }
}

export default App;
