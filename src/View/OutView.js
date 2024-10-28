import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  DISTANCE_CHAR = '-';

  renderCarInfos(carInfoList) {
    carInfoList.forEach((carInfo) => {
      this.renderCarInfo(carInfo.name, carInfo.distance);
    });
    this.print('\n');
  }

  renderCarInfo(car, distance) {
    this.print(`${car} : ${'-'.repeat(distance)}`);
  }

  renderWinnerInfo(winner) {
    this.print(`최종 우승자 : ${winner.join(', ')}`);
  }

  print(message) {
    Console.print(message);
  }
}
