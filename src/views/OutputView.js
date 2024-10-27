import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printNewLine() {
    Console.print('');
  }

  static printInput(input) {
    Console.print(input);
  }

  // 처음 실행 시 출력
  static printRun() {
    Console.print('실행 결과');
  }

  static printGame(carList) {
    carList.forEach(car => {
      const output = `${car.name} : ` + '-'.repeat(car.distance);
      Console.print(output);
    });
  }

  static printWinners(winners) {
    const winnersOutput = winners.join(', ');
    Console.print(`최종 우승자 : ${winnersOutput}`);
  }
}

export default OutputView;
