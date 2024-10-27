import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async getCarNames(query) {
    try {
      const input = await Console.readLineAsync(query);
      const carNames = input.split(',').map((name) => name.trim());
      return carNames;
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }

  async getTryNumber(query) {
    try {
      const input = await Console.readLineAsync(query);
      return input;
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }

  setGame(input) {
    const scoreBoard = {};
    input.forEach((name) => {
      scoreBoard[name] = 0;
    });
    return scoreBoard;
  }

  executionResult(input) {
    const inputKeys = Object.keys(input);
    inputKeys.forEach((item) => {
      const isFowrad = Random.pickNumberInRange(0, 9);
      if (isFowrad >= 4) {
        input[item] += 1;
      }
    });
    return input;
  }

  printResult(input) {
    const inputKeys = Object.keys(input);
    inputKeys.forEach((item) => {
      Console.print(`${item} : ${'-'.repeat(input[item])}`);
    });
  }

  async run() {
    const carNames = await this.getCarNames(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const tryNumber = await this.getTryNumber('시도할 횟수는 몇 회인가요?\n');

    const scoreBoard = this.setGame(carNames);
    const firstRound = this.executionResult(scoreBoard);
    this.printResult(firstRound);
  }
}

export default App;
