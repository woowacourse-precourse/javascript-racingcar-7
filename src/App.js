import { Console } from '@woowacourse/mission-utils';
import { IoHandler } from './IoHandller.js';

class App {
  async run() {
    try {
      const io = new IoHandler();
      const carName = await io.input('경주할 자동차의 이름을 입력한다 : ');
      const count = await io.input('시도할 횟수를 입력한다 : ');
      io.print(carName);
      io.print(count);
      // 나머지 로직 처리
    } catch (error) {
      Console.print(error.message);
      throw error; // 예외를 다시 던져 Promise가 reject되도록 처리
    }
  }
}

export default App;
