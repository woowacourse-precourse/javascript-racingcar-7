import { printNotificationExecutionResult, printRacerAndRacingOutput } from '../Views/outputView.js';
import { Random } from '@woowacourse/mission-utils';
import { findWinners } from './findingWinners.js';

let racingLengthNum = [];
let racingLengthStr = [];

const assignZeroToArray = carNames => {
  for (let i = 0; i < carNames.length; i++) {
    racingLengthNum.push(Number('0'));
  }
};

const findProgressionLength = (carNames, racingCount) => {
  assignZeroToArray(carNames);
  printNotificationExecutionResult();

  for (let i = 0; i < racingCount; i++) {
    for (let j = 0; j < carNames.length; j++) {
      const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        racingLengthNum[j] += 1;
      }
      racingLengthStr[j] = '-'.repeat(racingLengthNum[j]);
    }
    printRacerAndRacingOutput(carNames, racingLengthStr);
  }
  findWinners(carNames, racingLengthNum);
};

export default findProgressionLength;
