import { Random } from '@woowacourse/mission-utils';
import { printNotificationExecutionResult, printRacerAndRacingOutput } from '../Views/outputView.js';
import { findWinner } from './findingWinner.js';

let racingLengthNum = [];
let racingLengthStr = [];

const assignZeroToArray = carNamesInput => {
  for (let i = 0; i < carNamesInput.length; i++) {
    racingLengthNum.push(Number('0'));
  }
};

const findProgressionLength = (carNamesInput, racingCountInput) => {
  assignZeroToArray(carNamesInput);
  printNotificationExecutionResult();

  for (let i = 0; i < racingCountInput; i++) {
    for (let j = 0; j < carNamesInput.length; j++) {
      const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        racingLengthNum[j] += 1;
      }
      racingLengthStr[j] = '-'.repeat(racingLengthNum[j]);
    }
    printRacerAndRacingOutput(carNamesInput, racingLengthStr);
  }
  findWinner(carNamesInput, racingLengthNum);
};

export default findProgressionLength;
