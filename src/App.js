import GetInput from './io/GetInput.js';
import StartGame from './play/StartGame.js';

class App {
  async run() {
    try{
      const carNames = await GetInput.getCarNames();
      const tryCount = await GetInput.getTryCount();
      StartGame.start(carNames, tryCount);
    } catch (error) {
      // 에러 처리
    }
  }
}

export default App;
