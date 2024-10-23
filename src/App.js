import { Console, Random } from "@woowacourse/mission-utils";
class App {
  async run() {
    const NUM = Random.pickNumberInRange(0, 9);
    Console.print(NUM);
  }
}

export default App;
