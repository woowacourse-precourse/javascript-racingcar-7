import { MissionUtils } from '@woowacourse/mission-utils';

class OutputManager {
  static printProgressTitle() {
    MissionUtils.Console.print('실행 결과');
  }

  static printProgress(cars) {
    cars.forEach(this.printCarPosition);
    this.printNewLine();
  }

  static printCarPosition(car) {
    const progressBar = '-'.repeat(car.getPosition());
    MissionUtils.Console.print(`${car.getName()} : ${progressBar}`);
  }

  static printNewLine() {
    MissionUtils.Console.print('');
  }

  static printWinners(winners) {
    const result = winners.join(', ');
    MissionUtils.Console.print(`최종 우승자 : ${result}`);
  }
}

export default OutputManager;
