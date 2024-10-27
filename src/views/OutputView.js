import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printStart() {
    Console.print('실행 결과');
  }

  static printRoundResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${'-'.repeat(car.advance)}`);
    });
    Console.print(''); // 라운드 구분을 위한 줄바꿈
  }

  static printWinners(winners) {
    Console.print(`최종 우승자: ${winners.join(', ')}`);
  }
}

export default OutputView;
