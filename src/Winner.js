import { Console } from "@woowacourse/mission-utils";

class Winner {
  static determineWinners(cars) {
    const maxPosition = Math.max(...cars.map(car => car.position));
    return cars.filter(car => car.position === maxPosition).map(car => car.name);
  }

  static announceWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default Winner;
