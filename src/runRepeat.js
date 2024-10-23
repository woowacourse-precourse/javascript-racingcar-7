import { Console } from '@woowacourse/mission-utils';

const runRepeat = function runRepeat(carArray, repeatCount) {
  Console.print('\n실행 결과');
  for (let repeat = 0; repeat < repeatCount; repeat++) {
    carArray.forEach((car) => {
      car.moveRandomProbability();
      car.printInfo();
    });
    Console.print('');
  }
};

export default runRepeat;
