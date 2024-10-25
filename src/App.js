import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const carNames = (
        await Console.readLineAsync(
          '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
        )
      ).split(',');

      const nameLengthCheck = carNames.some((name) => name.length > 5);
      if (nameLengthCheck) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
      }

      const attemps = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?\n'
      );
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
