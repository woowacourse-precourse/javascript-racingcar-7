import { MissionUtils } from '@woowacourse/mission-utils';
import RacingCar from './RacingCar.js';

class RacingGame {
  constructor() {
    this.carList = [];
    this.count = 0;
  }

  setRacingCars(carNames) {
    this.carList = carNames.split(',').map((carName) => {
      if (carName.length > 5) {
        throw new Error('자동차 이름은 5자 이하만 가능합니다.');
      }
      return new RacingCar(carName);
    });
  }

  setCount(count) {
    this.count = count;
  }

  startRacing() {
    for (let i = 0; i < this.count; i++) {
      this.carList.forEach((car) => {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        car.tryMove(randomNumber);
        MissionUtils.Console.print(car.getPosition());
      });
      MissionUtils.Console.print('');
    }
  }
}

export default RacingGame;
