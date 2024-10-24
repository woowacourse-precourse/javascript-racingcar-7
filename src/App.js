import { scan } from './commonFuntion/scanner.js';
import { runRace } from './race/runRace.js';

class App {
  async run() {
    const carsName = await scan(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    const repeatNumber = await scan('시도할 횟수는 몇 회인가요?');

    runRace(carsName, repeatNumber);
  }
}

export default App;
