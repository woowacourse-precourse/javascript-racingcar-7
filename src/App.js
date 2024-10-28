// Random.pickNumberInRange(0, 9);   : 0에서 9까지의 정수 중 한 개의 정수 반환
import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 경주할 자동차 이름(이름은 쉼표 기준으로 구분)
      const line = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    } catch(error) {
      throw new Error(`[ERROR]`);
    }
  }
}

export default App;