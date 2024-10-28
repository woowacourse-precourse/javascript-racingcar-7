import { MissionUtils } from '@woowacourse/mission-utils';
class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      const attempts = await this.getAttempts();
      this.racing(carNames, attempts);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  async getCarNames() {
    const carNamesInput = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const carNameArray = carNamesInput.split(',');
    carNameArray.forEach((name) => {
      if (name.length > 5) {
        throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
      }
    });

    return carNameArray;
  }
  async getAttempts() {
    const attemptInput = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    const attemptNum = parseInt(attemptInput);
    if (isNaN(attemptNum) || attemptNum <= 0) {
      throw new Error('[ERROR] 시도 횟수는 양수만 가능합니다.');
    }
    return attemptNum;
  }

  racing(carNames, attempts) {
    const cars = carNames.map((name) => ({ name, go: 0 }));

    for (let i = 0; i < attempts; i++) {
      cars.forEach((car) => {
        const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNum > 3) {
          car.go++;
        }
      });
      this.displayRaceProgress(cars);
    }
    this.displayWinners(cars);
  }

  displayRaceProgress(cars) {
    cars.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.go)}`);
    });
    MissionUtils.Console.print('');
  }

  displayWinners(cars) {
    const maxGo = Math.max(...cars.map((car) => car.go));
    const winners = cars
      .filter((car) => car.go === maxGo)
      .map((car) => car.name);

    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
