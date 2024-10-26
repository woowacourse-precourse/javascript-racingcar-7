import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const { carNames, attemptCount } = await this.getUserInput();
  }

  async getUserInput() {
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,)로 구분): ',
    );
    const attemptCountInput =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?: ');

    const carNames = this.validateCarNames(carNamesInput);
    const attemptCount = this.validateAttemptCount(attemptCountInput);

    return { carNames, attemptCount };
  }

  validateCarNames(input) {
    const carNames = input.split(',').map((name) => name.trim());

    carNames.forEach((name) => {
      if (name.length > 5) {
        const errorMessage = '[ERROR] 자동차 이름은 5자 이하여야 합니다.';
        Console.print(errorMessage);
        throw new Error(errorMessage);
      }
    });

    return carNames;
  }
}

export default App;
