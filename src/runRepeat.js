import { Console } from '@woowacourse/mission-utils';

const runRepeat = function runRepeat(cars, repeatCount) {
  Console.print('\n실행 결과');

  for (let step = 0; step < repeatCount; step++) {
    cars.forEach((car) => {
      car.tryMove();
      car.printStatus();
    });

    // 스텝 간 간격을 위한 빈 줄 출력
    Console.print('');
  }
};

export default runRepeat;
