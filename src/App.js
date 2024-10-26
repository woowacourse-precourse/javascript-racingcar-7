import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const userInputGameStart = (
      await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      )
    ).trim();

    const userInputGameOfTime = (
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n')
    ).trim();

    class gameCar {
      constructor(userInput) {
        this.name = this.splitName(userInput);
      }

      splitName(userInput) {
        return userInput.split(',').map((name) => name.trim());
      }
    }

    try {
      new gameCar(userInputGameStart);
    } catch (error) {
      throw new Error('[ERROR]' + error.message);
    }
  }
}

export default App;
