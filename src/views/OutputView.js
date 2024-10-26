import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printNewLine() {
    Console.print('');
  }

  static printRun() {
    Console.print('실행 결과');
  }

  static printGame(carList) {
    carList.forEach(car => {
      const output = `${car.name}: ` + '-'.repeat(car.distance);
      Console.print(output);
    });
  }
}

export default OutputView;
