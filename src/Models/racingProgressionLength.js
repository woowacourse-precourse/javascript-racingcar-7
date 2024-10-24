import { Random } from '@woowacourse/mission-utils';
import { printNotificationExecutionResult, printRacingProgressOutput, printFinalWinners } from '../Views/outputView.js';

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
  findWinner(carNamesInput);
};

const findWinner = carNamesInput => {
  const max = Math.max(...progressionNumberForEachRacer);

  let FindingMaxNumIndex = progressionNumberForEachRacer.indexOf(max);
  let MaxNumberNames = [];

  while (FindingMaxNumIndex != -1) {
    MaxNumberNames.push(carNamesInput[FindingMaxNumIndex]);
    FindingMaxNumIndex = progressionNumberForEachRacer.indexOf(max, FindingMaxNumIndex + 1);
  }
  printFinalWinners(MaxNumberNames);
};

export default findProgressionLength;
