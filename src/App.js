import { Console, Random } from '@woowacourse/mission-utils';
class App {
  async run() {
    const finishLine =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
  }
}

export default App;
