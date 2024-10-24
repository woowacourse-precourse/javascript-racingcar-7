import { Console } from '@woowacourse/mission-utils';
import { seperateCar } from '../car/seperateCar.js';
import { runRaceCycle } from './runRaceCycle.js';
import { getWinner } from './getWinner.js';

export const runRace = (cars, repeat) => {
  const carsArray = seperateCar(cars);
  const cumulativeResults = new Array(carsArray.length).fill('');

  Console.print('\n실행 결과');

  for (let i = 1; i <= repeat; i++) {
    runRaceCycle(carsArray, cumulativeResults);
  }
  Console.print('최종 우승자 : ' + getWinner(carsArray, cumulativeResults));
};
