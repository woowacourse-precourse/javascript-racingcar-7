import { Console } from '@woowacourse/mission-utils';

export default class ViewOut {
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

  renderWinnerInfo(car) {
    this.print(`최종 우승자 : ${car.join(', ')}`);
  }

  print(message) {
    Console.print(message);
  }
}
