import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      Console.print('자동차 이름 입력 테스트');
      const carNames = await this.getCarNames();
      Console.print('\n입력된 자동차 이름 확인');
      carNames.forEach((name) => {
        Console.print(`${name} (길이 : ${name.length}자)`);
      });

      const attempts = await this.getAttempts();
      Console.print(`\n입력된 시도 횟수 : ${attempts}회`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요 : '
    );
    const names = input.split(',').map((name) => name.trim());
    this.validateCarNames(names);
    return names;
  }

  validateCarNames(names) {
    if (names.some((name) => name.length === 0)) {
      throw new Error('[ERROR] 자동차 이름은 1자 이상이어야 합니다.');
    }
    if (names.some((name) => name.length > 5)) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
  }

  async getAttempts() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요? ');
    const attempts = Number(input);
    this.validateAttempts(attempts);
    return attempts;
  }

  validateAttempts(attempts) {
    if (!Number.isInteger(attempts) || attempts <= 0) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.');
    }
  }
}

export default App;
