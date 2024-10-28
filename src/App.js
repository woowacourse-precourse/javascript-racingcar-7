import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const carNames = await App.getCarNames();
      const moveAttempts = await App.getMoveAttempts();
      const raceResults = App.startRace(carNames, moveAttempts);
      App.printWinners(raceResults);
    } catch (error) {
      Console.print(`${error.message}`);
      throw error;
    }
  }

  static async getCarNames() {
    const inputNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const MAX_CAR_NAME = 5;

    const carNames = inputNames.split(',').map(name => name.trim());

    carNames.forEach(name => {
      if (name.length > MAX_CAR_NAME) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
      }
    });

    return carNames;
  }

  static async getMoveAttempts() {
    const inputAttempts = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const moveAttempts = parseInt(inputAttempts, 10);

    if (Number.isNaN(moveAttempts) || moveAttempts <= 0) {
      throw new Error('[ERROR] 시도할 횟수는 양의 정수여야 합니다.');
    }

    return moveAttempts;
  }

  static startRace(carNames, moveAttempts) {
    const raceResults = carNames.map(name => ({ name, position: 0 }));

    for (let i = 0; i < moveAttempts; i += 1) {
      App.moveCars(raceResults);
      App.printCurrentRound(raceResults);
    }

    return raceResults;
  }

  static moveCars(cars) {
    cars.forEach(car => {
      if (App.canMove()) {
        car.position += 1;
      }
    });
  }

  static canMove() {
    const MAX_RANDOM_RANGE = 9;
    const MIN_MOVABLE_NUMBER = 4;

    return Random.pickNumberInRange(0, MAX_RANDOM_RANGE) >= MIN_MOVABLE_NUMBER;
  }

  static printCurrentRound(raceResults) {
    raceResults.forEach(car => {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    Console.print('');
  }

  static printWinners(raceResults) {
    const maxPos = Math.max(...raceResults.map(car => car.position));
    const winners = raceResults
      .filter(car => car.position === maxPos)
      .map(car => car.name);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
