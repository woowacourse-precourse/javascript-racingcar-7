import { Random } from '@woowacourse/mission-utils';
import { printNotificationExecutionResult, printRacingProgressOutput } from '../Views/outputView.js';
import { findWinner } from './findingwinners.js';

let progressionNumberForEachRacer = [];
let progressionLengthForEachRacer = [];

const assignZeroToArray = (carNamesInput, progressionLengthForEachRacer) => {
  for (let i = 0; i < carNamesInput.length; i++) {
    progressionNumberForEachRacer.push(Number('0'));
  }
};

const findProgressionLength = (carNamesInput, racingCountInput) => {
  assignZeroToArray(carNamesInput);
  printNotificationExecutionResult();

  for (let i = 0; i < racingCountInput; i++) {
    for (let j = 0; j < carNamesInput.length; j++) {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber > 4) {
        progressionNumberForEachRacer[j] += 1;
      }
      progressionLengthForEachRacer[j] = '-'.repeat(progressionNumberForEachRacer[j]);
    }
    printRacingProgressOutput(carNamesInput, progressionLengthForEachRacer);
  }
  findWinner(carNamesInput, progressionNumberForEachRacer);
};

export default findProgressionLength;
