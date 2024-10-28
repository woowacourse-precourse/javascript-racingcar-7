import { MissionUtils } from '@woowacourse/mission-utils';

class OutputView {
  static printResultMessage() {
    MissionUtils.Console.print('\n실행 결과');
  }

  static printRountResult(cars) {
    for (let car of cars) {
      const carName = car.getName();
      const distance = car.getDistance();

      MissionUtils.Console.print(`${carName} : ${'-'.repeat(distance)}`);
    }

    MissionUtils.Console.print('');
  }

  static printWinner(winner) {
    MissionUtils.Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
}

export default OutputView;
