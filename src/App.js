import { Console, Random } from '@woowacourse/mission-utils';

class RacingCarApp {
  constructor() {
    this.carNames = [];
    this.attemptCount = 0;
    this.carsProgress = {};
  }

  async run() {
    try {
      await this.getCarNamesFromUser();
      await this.getAttemptCountFromUser();
      this.initializeCarsProgress();
      this.runRaceRounds();
      this.announceWinners();
    } catch (error) {
      throw error; 
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

  async getAttemptCountFromUser() {
    const attemptCountInput = await Console.readLineAsync('시도할 횟수를 입력하세요: ');
    const attemptCount = Number(attemptCountInput);
    this.validateAttemptCount(attemptCount);

    this.attemptCount = attemptCount;
  }

  validateAttemptCount(attemptCount) {
    if (!Number.isInteger(attemptCount) || attemptCount < 1) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 자연수여야 합니다.');
    }
  }

  initializeCarsProgress() {
    this.carsProgress = this.carNames.reduce((progress, name) => {
      progress[name] = ''; // 각 자동차의 초기 진행 상태를 빈 문자열로 설정
      return progress;
    }, {});
  }

  runRaceRounds() {
    Console.print('\n실행 결과');

    for (let round = 0; round < this.attemptCount; round++) {
      this.carNames.forEach(name => {
        const randomValue = Random.pickNumberInRange(0, 9);
        if (randomValue >= 4) {
          this.carsProgress[name] += '-';
        }
      });

      this.printRoundResult();
    }
  }

  printRoundResult() {
    this.carNames.forEach(name => {
      Console.print(`${name} : ${this.carsProgress[name]}`);
    });

    Console.print('');
  }

  announceWinners() {
    const maxDistance = Math.max(...Object.values(this.carsProgress).map(progress => progress.length));
    const winners = this.carNames.filter(name => this.carsProgress[name].length === maxDistance);

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default RacingCarApp;
