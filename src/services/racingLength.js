import { Console, Random } from '@woowacourse/mission-utils';
import { printRacerAndRacingOutput } from '../views/outputView.js';
import { findWinners } from './findingWinners.js';

const racingLengthNum = [];
const racingLengthStr = [];

const assignZeroToArray = (carNames) => {
  for (let i = 0; i < carNames.length; i++) {
    racingLengthNum.push(Number('0'));
  }
};

const generateRandomNum = () => {
  const randomNum = Random.pickNumberInRange(0, 9);
  return randomNum;
};

const findRacingLength = (carNames) => {
  for (let j = 0; j < carNames.length; j++) {
    const randomNum = generateRandomNum();
    if (randomNum >= 4) {
      racingLengthNum[j] += 1;
    }
    racingLengthStr[j] = '-'.repeat(racingLengthNum[j]);
  }
};

const updateRacingProgress = (carNames, racingCount) => {
  assignZeroToArray(carNames);
  Console.print('\n실행 결과');
  for (let i = 0; i < racingCount; i++) {
    findRacingLength(carNames);
    printRacerAndRacingOutput(carNames, racingLengthStr);
  }
  findWinners(carNames, racingLengthNum);
};

export default updateRacingProgress;
