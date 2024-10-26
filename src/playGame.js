import { MissionUtils } from '@woowacourse/mission-utils';
import printProgress from './printProgress.js';
import isRandomSingleDigitHigherThanThree from './isRandomSingleDigitHigherThanThree.js';

function playGame(carNames, attempts) {
  const record = {};

  carNames.forEach((carName) => {
    record[carName] = 0;
  });

  MissionUtils.Console.print('');
  MissionUtils.Console.print('실행 결과');

  for (let i = 0; i < attempts; i += 1) {
    carNames.forEach((carName) => {
      if (isRandomSingleDigitHigherThanThree()) {
        record[carName] += 1;
      }
    });
    printProgress(record);
    MissionUtils.Console.print('');
  }
}

export default playGame;
