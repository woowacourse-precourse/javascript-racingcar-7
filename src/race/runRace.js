import { Console } from '@woowacourse/mission-utils';
import { seperateCar } from '../car/seperateCar.js';
import { runRaceCycle } from './runRaceCycle.js';
import { getWinner } from './getWinner.js';

export const runRace = (cars, repeat) => {
  if (!Number(repeat))
    throw new Error('[ERROR] 시도할 횟수는 숫자로 입력해주세요.');

  const carsArray = seperateCar(cars);
  const cumulativeResults = new Array(carsArray.length).fill('');

  Console.print('\n실행 결과');

  for (let i = 1; i <= Number(repeat); i++) {
    runRaceCycle(carsArray, cumulativeResults);
  }
  Console.print('최종 우승자 : ' + getWinner(carsArray, cumulativeResults));
};
