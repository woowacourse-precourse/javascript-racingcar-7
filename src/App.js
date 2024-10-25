import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');

    try {
      const input = await Console.readLineAsync('> ');
      const cars = this.parseCarNames(input);
      Console.print(`입력된 자동차 이름들: ${cars.join(', ')}`);

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
}

export default App;
