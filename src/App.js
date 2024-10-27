import { Console } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';

const NUMBER_REGEX = /^[0-9]*$/;
const ENGLISH_REGEX = /^[a-zA-Z]*$/;
const SPACE_REGEX = /\s/g;
const ATTEMPTS_LIMIT = 50;
const MOVE_MINIMUM = 4;

class App {
  async run() {
    try {
      const cars = await this.getCars();
      const attempts = await this.getAttempts();
      const winners = this.racingCar(cars, attempts);
      Console.print(`최종 우승자 : ${winners.join(', ')}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async getCars() {
    const carNames = await this.inputCarNames();
    await this.checkCarNameError(carNames);
    const cars = this.carNamesToObject(carNames);
    return cars;
  }

  async inputCarNames() {
    const carNames = (
      await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      )
    )
      .trim()
      .split(',');

    return carNames;
  }

  async checkCarNameError(carNames) {
    let errorType = '';

    if (carNames.some((name) => name.length === 0)) {
      errorType = 'carNameBlank';
    } else if (carNames.some((name) => name.length > 5)) {
      errorType = 'carNameLength';
    } else if (carNames.some((name) => SPACE_REGEX.test(name))) {
      errorType = 'carNameSpace';
    } else if (carNames.some((name) => !ENGLISH_REGEX.test(name))) {
      errorType = 'carNameEnglish';
    }

    await this.checkMessage(errorType);
  }

  carNamesToObject(carNames) {
    const cars = carNames.reduce((acc, name) => {
      acc[name] = '';
      return acc;
    }, {});

    return cars;
  }

  async getAttempts() {
    const attempts = parseInt(
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n')
    );
    await this.checkAttemptsError(attempts);
    return attempts;
  }

  async checkAttemptsError(attempts) {
    let errorType = '';

    if (!NUMBER_REGEX.test(attempts)) {
      errorType = 'attemptsNotNumber';
    } else if (attempts > ATTEMPTS_LIMIT) {
      errorType = 'attemptsLimit';
    }

    await this.checkMessage(errorType);
  }

  racingCar(cars, attempts) {
    Console.print('\n실행 결과');

    for (let i = 0; i < attempts; i++) {
      this.eachRound(cars);
    }

    return this.getWinners(cars);
  }

  eachRound(cars) {
    Object.entries(cars).forEach(([key, value]) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      this.decideMovement(cars, randomNumber, key, value);
    });

    Console.print('');
  }

  decideMovement(cars, randomNumber, key, value) {
    if (randomNumber >= MOVE_MINIMUM) cars[key] = value + '-';

    Console.print(`${key} : ${cars[key]}`);
  }

  getWinners(cars) {
    let moves = [];
    for (const key in cars) {
      moves.push(cars[key].length);
    }
    const max = Math.max(...moves);
    const winners = Object.keys(cars).filter(
      (name) => cars[name].length === max
    );
    return winners;
  }

  async checkMessage(type) {
    switch (type) {
      case 'carNameBlank':
        throw new Error('[ERROR] 빈 문자인 자동차 이름이 입력되었습니다.');
      case 'carNameLength':
        throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
      case 'carNameSpace':
        throw new Error('[ERROR] 각 자동차 이름은 공백 없이 입력해주세요.');
      case 'carNameEnglish':
        throw new Error('[ERROR] 자동차 이름은 영어로 입력해주세요.');
      case 'attemptsNotNumber':
        throw new Error('[ERROR] 시도할 횟수는 숫자로 입력해주세요.');
      case 'attemptsLimit':
        throw new Error('[ERROR] 시도할 횟수는 최대 50회까지 가능합니다.');
    }
  }
}

export default App;
