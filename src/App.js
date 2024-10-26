import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');

    try {
      const carInput = await Console.readLineAsync('> ');
      const cars = this.parseCarNames(carInput);

      Console.print('시도할 횟수는 몇 회인가요?');
      const attemptInput = await Console.readLineAsync('> ');
      const attempts = this.parseAttempts(attemptInput);

      this.initializeRace(cars, attempts);
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

  initializeRace(cars, attempts) {
    const carPositions = cars.reduce((acc, car) => ({ ...acc, [car]: 0 }), {});
    for (let i = 0; i < attempts; i++) {
      this.runRaceRound(carPositions);
    }
    Console.print('레이스가 종료되었습니다.');
    this.announceRaceResults(carPositions);
  }

  runRaceRound(carPositions) {
    Console.print('\n실행 결과');
    Object.keys(carPositions).forEach((car) => {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        carPositions[car] += 1;
      }
      Console.print(`${car} : ${'-'.repeat(carPositions[car])}`);
    });
  }

  announceRaceResults(carPositions) {
    const maxDistance = Math.max(...Object.values(carPositions));
    const winners = Object.keys(carPositions).filter(
      (car) => carPositions[car] === maxDistance
    );
    Console.print(`\n최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
