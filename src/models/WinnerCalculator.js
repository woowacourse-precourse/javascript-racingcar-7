import { Console } from '@woowacourse/mission-utils';

class WinnerCalculator {
  static #findWinners(cars) {
    const maxDistance = cars.reduce((maxDistance, car) => {
      return Math.max(maxDistance, car.getDistance());
    }, 0);

    return cars.filter((car) => car.getDistance() === maxDistance);
  }

  static printWinners(cars) {
    const winnerCars = this.#findWinners(cars);
    const winnerNames = winnerCars.map((winner) => winner.getName()).join(',');
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default WinnerCalculator;
