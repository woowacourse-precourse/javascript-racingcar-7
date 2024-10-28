import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.carNames = [];
    this.attempts = 0;
  }

  async run() {
    try {
      await this.getCarNamesFromUser();
      await this.getAttemptsFromUser();
    } catch (error) {
      console.error(error.message);
    }
  }

  async getCarNamesFromUser() {
    const userInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분): '
    );

    const carNames = userInput.split(',').map(name => name.trim());
    this.validateCarNames(carNames);

    this.carNames = carNames;
  }

  validateCarNames(carNames) {
    carNames.forEach(name => {
      if (name === '') {
        throw new Error('[ERROR] 공백입니다.');
      }

      if (name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.');
      }
    });

    if (new Set(carNames).size !== carNames.length) {
      throw new Error('[ERROR] 중복된 자동차 이름이 있습니다.');
    }
  }

  async getAttemptsFromUser() {
    const attemptsInput = await Console.readLineAsync('시도할 횟수를 입력하세요: ');

    const attempts = Number(attemptsInput);
    this.validateAttempts(attempts);

    this.attempts = attempts;
  }

  validateAttempts(attempts) {
    if (!Number.isInteger(attempts) || attempts < 1) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 자연수여야 합니다.');
    }
  }
}

export default App;