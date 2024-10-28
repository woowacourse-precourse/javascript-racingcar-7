import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("");
      const carNames = this.parseCarNames(input);
      Console.print(`최종 우승자: ${carNames.join(', ')}`);
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
}

export default App;
