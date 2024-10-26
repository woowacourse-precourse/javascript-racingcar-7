import { Console } from '@woowacourse/mission-utils';
import { getCarNames, getCount } from "./IO.js";
import { randomRacing } from "./racing.js";
import { displayResults } from "./IO.js";
import { MESSAGE } from "./message.js";

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      const chance = await getCount();
      Console.print("\n"+MESSAGE.EXECUTION_RESULT);
      const results = randomRacing(carNames, chance, displayResults);
      } catch (error) {
        Console.print(`오류가 발생했습니다: ${error.message}`);
      }
    }
  }

export default App;

