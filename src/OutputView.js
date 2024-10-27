import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printPositions(cars) {
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
    });
    Console.print('\n');
  },
};

export default OutputView;
