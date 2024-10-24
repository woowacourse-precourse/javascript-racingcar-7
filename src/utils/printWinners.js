import { Console } from '@woowacourse/mission-utils';
import { findWinners } from './findWinners.js';

export const printWinners = (cars) => {
  const winnerCars = findWinners(cars);
  const winnerNames = winnerCars.map((car) => car.getName()).join(',');
  Console.print(`최종 우승자 : ${winnerNames}`);
};
