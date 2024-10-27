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
      if (Number.isNaN(Number(input))) {
        throw new Error(`[ERROR]`);
      }
      return input;
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }

  // 입력받은 경주용 자동차 이름을 {이름: 점수}의 점수판 객체로 만들기
  setGame(input) {
    const scoreBoard = {};
    input.forEach((name) => {
      scoreBoard[name] = 0;
    });
    return scoreBoard;
  }

  // 1회차 실행결과 계산하기
  executionResult(input) {
    const updatedInput = { ...input };

    Object.keys(updatedInput).forEach((item) => {
      const isFowrad = Random.pickNumberInRange(0, 9);
      if (isFowrad >= 4) {
        updatedInput[item] += 1;
      }
    });
    return updatedInput;
  }

  printResult(input) {
    const inputKeys = Object.keys(input);
    inputKeys.forEach((item) => {
      Console.print(`${item} : ${'-'.repeat(input[item])}`);
    });
  }

  findWinnder(input) {
    const inputKeys = Object.keys(input);
    const inputValues = Object.values(input);

    const highScore = Math.max.apply(null, inputValues);

    const winners = [];

    inputKeys.forEach((item) => {
      if (input[item] === highScore) {
        winners.push(item);
      }
    });

    return winners;
  }

  printWinner(input) {
    const winnersString = input.join(', ');
    Console.print(`최종 우승자 : ${winnersString}`);
  }

  async run() {
    const carNames = await this.getCarNames(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const tryNumber = await this.getTryNumber('시도할 횟수는 몇 회인가요?\n');

    let scoreBoard = this.setGame(carNames);

    Console.print('\n실행 결과');

    for (let i = 0; i < tryNumber; i++) {
      scoreBoard = this.executionResult(scoreBoard);
      this.printResult(scoreBoard);
      Console.print('');
    }

    const winners = this.findWinnder(scoreBoard);
    this.printWinner(winners);
  }
}

export default App;
