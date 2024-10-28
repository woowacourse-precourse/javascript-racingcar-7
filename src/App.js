import { MissionUtils } from '@woowacourse/mission-utils';
import { inputHandler } from './inputHandler.js';

class App {
  async run() {
    try {
      const carNames = await inputHandler.getCarNamesInput();
      console.log(carNames);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
