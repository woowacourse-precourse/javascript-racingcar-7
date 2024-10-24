import { Console } from '@woowacourse/mission-utils';
import { generateRandomNumber } from './generateRandomNum.js';
import { isAdvance } from './isAdvance.js';

export const runRaceCycle = (car, cumulativeResults) => {
  for (let i = 0; i < car.length; i++) {
    if (isAdvance(generateRandomNumber())) {
      cumulativeResults[i] += '-';
    }
    Console.print(car[i] + ' : ' + cumulativeResults[i]);
  }
};
