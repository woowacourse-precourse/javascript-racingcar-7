import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      const carNames = this.parseCarNames(input);

      const attemptInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      const attempts = this.parseAttempts(attemptInput);

      const raceResults = this.startRace(carNames, attempts);

      const winners = this.getWinners(raceResults);
      Console.print(`최종 우승자 : ${winners.join(', ')}`);

    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  parseCarNames(input) {
    if (!input || input.trim() === "") {
      throw new Error("[ERROR] 자동차 이름을 입력해야 합니다.");
    }

    const carNames = input.split(',').map((name) => name.trim());

    carNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error(`[ERROR] 자동차 이름은 5자 이하만 가능합니다: "${name}"`);
      }
    });

    return carNames;
  }

  parseAttempts(input) {
    const attempts = parseInt(input, 10);

    if (isNaN(attempts) || attempts <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
    }

    return attempts;
  }

  startRace(carNames, attempts) {
    const raceResults = carNames.map((name) => ({
      name,
      distance: 0,
    }));

    for (let i = 0; i < attempts; i++) {
      raceResults.forEach((car) => {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          car.distance += 1;
        }
        Console.print(`${car.name} : ${'-'.repeat(car.distance)}`);
      });
      Console.print("\n")
    }

    return raceResults;
  }

  getWinners(results) {
    const maxDistance = Math.max(...results.map((car) => car.distance));
    return results
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);
  }

}

export default App;
