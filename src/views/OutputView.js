import { Console } from '@woowacourse/mission-utils';

class OutputView {
  printGameStart() {
    Console.print('\n실행 결과');
  }

  printRaceProgress(cars) {
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
    });
    Console.print(''); // 빈 줄 출력
  }

  printWinners(winners) {
    const winnerNames = winners.map((car) => car.getName()).join(', ');

    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default OutputView;
