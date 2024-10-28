import GetInput from './io/GetInput.js';
import StartGame from './play/StartGame.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try{
      const carNames = await GetInput.getCarNames();
      const tryCount = await GetInput.sgetTryCount();
      StartGame.start(carNames, tryCount);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
