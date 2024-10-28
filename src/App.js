// src/App.js
import RacingGameController from './controllers/RacingGameController.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      await RacingGameController.start();
      return;
    } catch (error) {
      Console.print(error.message);
      throw error;// 필요에 따라 애플리케이션 종료 로직을 추가할 수 있습니다.
    }
  }
}

export default App;
