import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const inputCarNames = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );
      const carNames = inputCarNames.split(',');

      Console.print(`자동차 이름: ${carNames}`);

      const inputTryCnt =
        await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      const tryCnt = Number(inputTryCnt);
      if (tryCnt < 0)
        throw new Error('이동을 시도할 횟수는 0보다 큰 값이어야 합니다.');

      Console.print(`시도할 횟수: ${tryCnt}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
