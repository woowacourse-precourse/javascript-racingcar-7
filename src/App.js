import { getCarName, getTryNumber } from "./functions/get-input.js";
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const carName = await getCarName();
    Console.print(carName);
    const tryNum = await getTryNumber();
    Console.print(tryNum);
  }
}

export default App;
