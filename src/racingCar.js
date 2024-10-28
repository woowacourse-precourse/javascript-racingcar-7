import { Console, MissionUtils } from '@woowacourse/mission-utils';

class RacingGame {
  constructor(tryNum, carArr) {
    this.tryNum = tryNum;
    this.cars = carArr.map((name) => ({ name, position: 0 }));
  }

  startRace() {
    Console.print('');
    Console.print('실행 결과');
    while (this.tryNum > 0) {
      this.tryNum -= 1;
      this.moveCars();
      this.displayRaceStatus();
    }
    this.displayWinners();
  }

  moveCars() {
    this.cars.forEach((car) => {
      if (this.shouldMove()) car.position += 1;
    });
  }

  shouldMove() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNum >= 4;
  }

  displayRaceStatus() {
    this.cars.forEach((car) => {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    Console.print('');
  }

  findWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    if (maxPosition === 0) {
      return [];
    }
    return this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }

  displayWinners() {
    const winners = this.findWinners();
    if (winners.length === 0) {
      Console.print('우승자가 없습니다');
    } else {
      Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
  }
}

// racing 함수로 외부에서 호출할 수 있게 래핑
export function racing(tryNum, carArr) {
  const game = new RacingGame(tryNum, carArr);
  game.startRace();
}
