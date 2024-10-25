import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const carNames = (await Console.readLineAsync('')).split(',');

      const nameLengthCheck = carNames.some((name) => name.length > 5);
      if (nameLengthCheck) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
      }

      const attemps = await Console.readLineAsync('');
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
