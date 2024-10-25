import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');

    try {
      const carInput = await Console.readLineAsync('> ');
      const cars = this.parseCarNames(carInput);

      Console.print('시도할 횟수는 몇 회인가요?');
      const attemptInput = await Console.readLineAsync('> ');
      const attempts = this.parseAttempts(attemptInput);

      Console.print(`입력된 자동차 이름들: ${cars.join(', ')}`);
      Console.print(`입력된 시도 횟수: ${attempts}`);

    } catch (error) {
      Console.print(error.message);
    }
  }

  parseCarNames(input) {
    const cars = input.split(',').map(name => name.trim());
    if (cars.some(name => name.length === 0 || name.length > 5)) {
      throw new Error('[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.');
    }
    return cars;
  }

  parseAttempts(input) {
    const attempts = parseInt(input, 10);
    if (isNaN(attempts) || attempts <= 0) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.');
    }
    return attempts;
  }
}

export default App;
