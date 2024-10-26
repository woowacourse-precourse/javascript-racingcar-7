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

    // userInput <= userInputGameStart
    class gameCar {
      constructor(userInput) {
        this.name = userInput.split(',');

        this.name.forEach((name, index, arr) => {
          arr[index] = name.trim();
        });

        Console.print(this.name);
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
