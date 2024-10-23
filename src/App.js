import { scan } from './commonFuntion/scanner.js';

class App {
  async run() {
    const input = await scan(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
  }
}

export default App;
