import { input, print } from './IoHandller.js';
import { validateError } from './Validate.js';

class App {
  async run() {
    try {
      const car = await input('경주할 자동차의 이름을 입력한다 : ');
      const count = await input('시도할 횟수를 입력한다 : ');
      validateError({ car, count });
    } catch (error) {
      print(error.message);
      throw error; // 예외를 다시 던져 Promise가 reject되도록 처리
    }
  }
}

export default App;
