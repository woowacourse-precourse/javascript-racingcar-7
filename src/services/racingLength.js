import { Random } from '@woowacourse/mission-utils';
import {
  printNotificationExecutionResult,
  printRacerAndRacingOutput,
} from '../views/outputView.js';
import { findWinners } from './findingWinners.js';

const racingLengthNum = [];
const racingLengthStr = [];

const assignZeroToArray = (carNames) => {
  for (let i = 0; i < carNames.length; i++) {
    racingLengthNum.push(Number('0'));
  }
};

// TO-DO: 리펙토링 함수명
const findRacingLength = (carNames) => {
  for (let j = 0; j < carNames.length; j++) {
    const randomNum = Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
      racingLengthNum[j] += 1;
    }
    racingLengthStr[j] = '-'.repeat(racingLengthNum[j]);
  }
};

const findProgressionLength = (carNames, racingCount) => {
  assignZeroToArray(carNames);
  printNotificationExecutionResult();
  for (let i = 0; i < racingCount; i++) {
    findRacingLength(carNames);
    printRacerAndRacingOutput(carNames, racingLengthStr);
  }
  findWinners(carNames, racingLengthNum);
};

export default findProgressionLength;
