import { Console, Random } from '@woowacourse/mission-utils';

const MyUtils = {
  printNewline: () => {
    Console.print('');
  },
  getRandomSingleDigit: () => {
    return Random.pickNumberInRange(0, 9);
  },
};

export default MyUtils;
