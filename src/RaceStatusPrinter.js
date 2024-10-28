import { Console } from '@woowacourse/mission-utils';

export function printRaceStatus(cars) {
  cars.forEach((car) => {
    const status = `${car.name} : ${'-'.repeat(car.position)}`;
    Console.print(status);
  });
  Console.print('');
}