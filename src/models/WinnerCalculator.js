import { Console } from '@woowacourse/mission-utils';

class WinnerCalculator {
  static #findWinners(cars) {
    const maxDistance = Math.max(...cars.map((car) => car.getDistance()));
    return cars.filter((car) => car.getDistance() === maxDistance);
  }

  static printWinners(cars) {
    const winnerCars = this.#findWinners(cars);
    const winnerNames = winnerCars.map((car) => car.getName()).join(',');
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default WinnerCalculator;
