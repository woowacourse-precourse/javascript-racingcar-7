import { Console } from '@woowacourse/mission-utils';
import { splitCarNames } from '../car/splitCarNames.js';
import { runRaceCycle } from './runRaceCycle.js';
import { findWinners } from './findWinners.js';

export const runRace = (cars, repeat) => {
  if (!Number(repeat))
    throw new Error('[ERROR] 시도할 횟수는 숫자로 입력해주세요.');

  const carsArray = splitCarNames(cars);
  const cumulativeResults = new Array(carsArray.length).fill('');

  Console.print('\n실행 결과');

  for (let i = 1; i <= Number(repeat); i++) {
    runRaceCycle(carsArray, cumulativeResults);
  }
  Console.print('최종 우승자 : ' + findWinners(carsArray, cumulativeResults));
};
