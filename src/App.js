import { Console } from '@woowacourse/mission-utils';
import { getCarsname, getTimes } from './input.js';
import { printWinner } from './print.js';
import { startRacing } from './racing.js';

class App {
  async run() {
    try {
      const splitedNames = await getCarsname();
      const times = await getTimes();

      Console.print('실행 결과');
      const winner = startRacing(splitedNames, times);

      printWinner(winner);
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }
}

export default App;
