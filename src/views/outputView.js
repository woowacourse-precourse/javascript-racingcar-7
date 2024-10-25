import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printGameStart() {
    Console.print('\n실행 결과');
  },

  printRoundStatus(cars) {
    cars.forEach((car) => {
      const position = '-'.repeat(car.getPosition());
      Console.print(`${car.getName()} : ${position}`);
    });
    Console.print('');
  },
};

export default OutputView;
