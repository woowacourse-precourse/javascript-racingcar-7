import { Console } from '@woowacourse/mission-utils';

const runRaces = function runRaces(cars, roundCount) {
  Console.print('\n실행 결과');

  for (let round = 0; round < roundCount; round++) {
    cars.forEach((car) => {
      car.tryMove();
      car.printStatus();
    });

    // 스텝 간 간격을 위한 빈 줄 출력
    Console.print('');
  }
};

export default runRaces;
