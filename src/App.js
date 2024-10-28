import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("자동차 이름을 입력해주세요(쉼표(,) 기준으로 구분): ");
      const carNames = this.parseCarNames(input);

      const attemptInput = await Console.readLineAsync("시도할 횟수를 입력해주세요: ");
      const attempts = this.parseAttempts(attemptInput);

      Console.print(`최종 우승자: ${carNames.join(', ')}`);
      Console.print(`시도할 횟수: ${attempts}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  parseCarNames(input) {
    const carNames = input.split(',').map((name) => name.trim());

    carNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error(`자동차 이름은 5자 이하만 가능합니다: "${name}"`);
      }
    });

    return carNames;
  }

  parseAttempts(input) {
    const attempts = parseInt(input, 10);

    if (isNaN(attempts) || attempts <= 0) {
      throw new Error("시도 횟수는 1 이상의 숫자여야 합니다.");
    }

    return attempts;
  }

}

export default App;
