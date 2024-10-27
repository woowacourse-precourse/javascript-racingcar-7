import GetInput from './io/GetInput.js';

class App {
  async run() {
    try{
      const carNames = await GetInput.getCarNames();
      const tryCount = await GetInput.getTryCount();
    } catch (error) {
      // 에러 처리
    }
  }
}

export default App;
