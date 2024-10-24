import { Random } from '@woowacourse/mission-utils';

let progressionNumberForEachRacer = [];

const assignZeroToArray = carNamesInput => {
  for (let i = 0; i < carNamesInput.length; i++) {
    progressionNumberForEachRacer.push(Number('0'));
  }
};

const findProgressionLength = (carNamesInput, racingCountInput) => {
  assignZeroToArray(carNamesInput);
  let progressionLengthForEachRacer = [];

  for (let i = 0; i < racingCountInput; i++) {
    for (let j = 0; j < carNamesInput.length; j++) {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber > 4) {
        progressionNumberForEachRacer[j] += 1;
      }
      progressionLengthForEachRacer[j] = '-'.repeat(progressionNumberForEachRacer[j]);
    }
  }
};

export default findProgressionLength;
