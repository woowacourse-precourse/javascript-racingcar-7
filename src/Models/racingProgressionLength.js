import { Console, Random } from '@woowacourse/mission-utils';

let progressionNumberForEachRacer = [];
let progressionLengthForEachRacer = [];

const assignZeroToArray = carNamesInput => {
  for (let i = 0; i < carNamesInput.length; i++) {
    progressionNumberForEachRacer.push(Number('0'));
  }
};

const findProgressionLength = (carNamesInput, racingCountInput) => {
  assignZeroToArray(carNamesInput);
  Console.print('');
  Console.print('실행 결과');

  for (let i = 0; i < racingCountInput; i++) {
    for (let j = 0; j < carNamesInput.length; j++) {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber > 4) {
        progressionNumberForEachRacer[j] += 1;
      }
      progressionLengthForEachRacer[j] = '-'.repeat(progressionNumberForEachRacer[j]);
    }
    resultOutput(carNamesInput);
  }
  findWinner(carNamesInput);
};

const resultOutput = carNamesInput => {
  for (let i = 0; i < carNamesInput.length; i += 1) {
    Console.print(`${carNamesInput[i]} : ${progressionLengthForEachRacer[i]}`);
  }
  Console.print('');
};

const findWinner = carNamesInput => {
  const max = Math.max(...progressionNumberForEachRacer);

  let FindingMaxNumIndex = progressionNumberForEachRacer.indexOf(max);
  let MaxNumberNames = [];

  while (FindingMaxNumIndex != -1) {
    MaxNumberNames.push(carNamesInput[FindingMaxNumIndex]);
    FindingMaxNumIndex = progressionNumberForEachRacer.indexOf(max, FindingMaxNumIndex + 1);
  }
  Console.print('최종 우승자 : ' + MaxNumberNames.join(', '));
};

export default findProgressionLength;
