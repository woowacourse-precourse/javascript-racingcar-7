import { Console } from '@woowacourse/mission-utils';

export function printRaceResult(cars) {
  const maxPosition = Math.max(...cars.map(car => car.position));
  const winners = cars.filter(car => car.position === maxPosition).map(car => car.name);
  Console.print(`최종 우승자 : ${winners.join(', ')}`);
}