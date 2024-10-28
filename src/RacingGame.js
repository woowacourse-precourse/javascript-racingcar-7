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

  getWinner() {
    const winnerList = this.carList.reduce((winners, car) => {
      if (winners.length <= 0 || car.position === winners[0].position) {
        winners.push(car);
      } else if (car.position > winners[0].position) {
        winners.splice(0, winners.length);
        winners.push(car);
      }
      return winners;
    }, []);

    return winnerList.map((car) => car.name).join(', ');
  }
}

export default RacingGame;
