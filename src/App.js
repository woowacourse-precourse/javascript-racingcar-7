import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.carNames = [];
  }

  async run() {
    try {
      await this.getCarNamesFromUser();
    } catch (error) {
      console.error(error.message);
    }
  }

  async getCarNamesFromUser() {
    const userInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)'
    );

    const carNames = userInput.split(',').map(name => name.trim());
    this.validateCarNames(carNames);

    this.carNames = carNames;
  }

  validateCarNames(carNames) {
    carNames.forEach(name => {
      if (name === '') {
        throw new Error('[ERROR] 공백입니다');
      }

      if (name.length > 5) {
        throw new Error(`[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.`);
      }
    });

    if (new Set(carNames).size !== carNames.length) {
      throw new Error('[ERROR] 중복된 자동차 이름이 있습니다.');
    }
  }
}

export default App;